#!/usr/bin/env python3
"""Tiny local server for Vocab Trainer.

- Serves this folder at http://localhost:8000
- Lets the app grade your open-ended answers with Groq, without putting
  your API key in the web page.
- Saves your progress and session history to data/progress.json.

Setup: create a file named .env next to this script containing one line:
    GROQ_API_KEY=your_key_here
Then run:  python3 server.py
Uses only the Python standard library.
"""
import json
import os
import sys
import urllib.error
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))
PORT = int(os.environ.get("PORT", "8000"))
GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"
ALLOWED_MODELS = {"openai/gpt-oss-120b", "openai/gpt-oss-20b", "llama-3.3-70b-versatile"}
MAX_BODY = 200_000
PROGRESS = os.path.join(HERE, "data", "progress.json")


def load_key():
    key = os.environ.get("GROQ_API_KEY", "").strip()
    if key:
        return key
    path = os.path.join(HERE, ".env")
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("GROQ_API_KEY="):
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    return ""


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=HERE, **kwargs)

    # never serve secrets or the server code itself
    def _blocked(self):
        parts = [p for p in self.path.split("?")[0].split("/") if p]
        return any(p.startswith(".") or p == "server.py" for p in parts)

    def _json(self, code, obj):
        data = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        if self.path.split("?")[0] == "/api/health":
            return self._json(200, {"groq": bool(load_key())})
        if self.path.split("?")[0] == "/api/progress":
            try:
                with open(PROGRESS, encoding="utf-8") as f:
                    return self._json(200, json.load(f))
            except FileNotFoundError:
                return self._json(200, {})
            except Exception:
                return self._json(200, {})
        if self._blocked():
            return self._json(404, {"error": "not found"})
        return super().do_GET()

    def do_POST(self):
        if self.path.split("?")[0] == "/api/progress":
            try:
                n = int(self.headers.get("Content-Length", "0"))
                if n <= 0 or n > 5_000_000:
                    return self._json(400, {"error": "Bad request size."})
                body = json.loads(self.rfile.read(n))
                if not isinstance(body, dict) or not isinstance(body.get("stats"), dict) or not isinstance(body.get("history"), list):
                    return self._json(400, {"error": "Bad request."})
                tmp = PROGRESS + ".tmp"
                with open(tmp, "w", encoding="utf-8") as f:
                    json.dump({"stats": body["stats"], "history": body["history"]}, f)
                os.replace(tmp, PROGRESS)
                return self._json(200, {"ok": True})
            except Exception:
                return self._json(400, {"error": "Bad request."})
        if self.path.split("?")[0] != "/api/grade":
            return self._json(404, {"error": "not found"})
        key = load_key()
        if not key:
            return self._json(400, {"error": "No GROQ_API_KEY found. Add it to the .env file and restart server.py."})
        try:
            n = int(self.headers.get("Content-Length", "0"))
            if n <= 0 or n > MAX_BODY:
                return self._json(400, {"error": "Bad request size."})
            body = json.loads(self.rfile.read(n))
            model = body.get("model")
            messages = body.get("messages")
            if model not in ALLOWED_MODELS or not isinstance(messages, list):
                return self._json(400, {"error": "Bad request."})
        except Exception:
            return self._json(400, {"error": "Bad request."})
        payload = json.dumps({"model": model, "messages": messages, "temperature": 0.2, "max_tokens": 6000}).encode("utf-8")
        req = urllib.request.Request(
            GROQ_URL,
            data=payload,
            method="POST",
            headers={
                "Content-Type": "application/json",
                "Authorization": "Bearer " + key,
                "User-Agent": "vocab-trainer/1.0",
            },
        )
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                data = json.loads(r.read())
            text = data["choices"][0]["message"]["content"]
            return self._json(200, {"content": text})
        except urllib.error.HTTPError as e:
            detail = e.read().decode("utf-8", "replace")[:500]
            return self._json(502, {"error": "Groq returned %d: %s" % (e.code, detail)})
        except Exception as e:
            return self._json(502, {"error": "Could not reach Groq: %s" % e})

    def log_message(self, fmt, *args):
        pass  # keep the terminal quiet


if __name__ == "__main__":
    print("Vocab Trainer running at http://localhost:%d  (Ctrl+C to stop)" % PORT)
    print("Groq key found." if load_key() else "No Groq key yet: add GROQ_API_KEY=... to a .env file to enable AI grading.")
    try:
        ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
    except KeyboardInterrupt:
        sys.exit(0)
