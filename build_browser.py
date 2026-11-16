#!/usr/bin/env python3
"""Builds words-browser.html: a single self-contained file (no internet needed)
for reading your vocabulary by topic on a phone.

Run again any time you add words to data/words.js:
    python3 build_browser.py
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = HERE / "data" / "words.js"
OUT = HERE / "words-browser.html"


def strip_line_comments(text):
    return "\n".join(l for l in text.splitlines() if not l.lstrip().startswith("//"))


def load_array(text, name):
    m = re.search(r"window\." + name + r"\s*=\s*", text)
    if not m:
        raise SystemExit("Could not find window." + name + " in words.js")
    start = text.index("[", m.end())
    dec = json.JSONDecoder()
    try:
        obj, _ = dec.raw_decode(text[start:])
    except json.JSONDecodeError:
        # tolerate trailing commas
        tail = text[start:]
        depth, end, in_str, esc = 0, None, False, False
        for i, ch in enumerate(tail):
            if in_str:
                if esc:
                    esc = False
                elif ch == "\\":
                    esc = True
                elif ch == '"':
                    in_str = False
                continue
            if ch == '"':
                in_str = True
            elif ch == "[":
                depth += 1
            elif ch == "]":
                depth -= 1
                if depth == 0:
                    end = i + 1
                    break
        chunk = re.sub(r",\s*([\]}])", r"\1", tail[:end])
        obj = json.loads(chunk)
    return obj


def main():
    text = strip_line_comments(SRC.read_text(encoding="utf-8"))
    topics = load_array(text, "TOPICS_DATA")
    words = load_array(text, "WORDS_DATA")

    slim = []
    for w in words:
        item = {
            "w": w.get("word", ""),
            "p": w.get("pos", ""),
            "d": w.get("definition", ""),
            "e": w.get("example", ""),
            "t": w.get("topics") or ["general"],
        }
        if w.get("pron"):
            item["r"] = w["pron"]
        if w.get("synonyms"):
            item["s"] = w["synonyms"]
        if w.get("collocations"):
            item["c"] = w["collocations"]
        forms = []
        if w.get("person"):
            forms.append(["person", w["person"]])
        if w.get("verb"):
            forms.append(["verb", w["verb"]])
        if w.get("noun"):
            forms.append(["noun", w["noun"]])
        if forms:
            item["f"] = forms
        slim.append(item)

    # keep only topics that are used, in the order defined in words.js
    used = {t for it in slim for t in it["t"]}
    ordered = [t for t in topics if t in used] + sorted(used - set(topics))

    data = json.dumps({"topics": ordered, "words": slim}, ensure_ascii=False)
    data = data.replace("</", "<\\/")
    html = TEMPLATE.replace("/*DATA*/", data)
    OUT.write_text(html, encoding="utf-8")
    print("Built", OUT.name, "with", len(slim), "words in", len(ordered), "topics")


TEMPLATE = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#2f5d62">
<title>My Words</title>
<style>
  :root {
    --bg: #f6f4ef; --card: #ffffff; --ink: #1f2933; --muted: #6b7280;
    --line: #e4e0d6; --accent: #2f5d62; --accent-soft: #dcebea; --mark: #fff1c2;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #14181b; --card: #1d2327; --ink: #e8ecef; --muted: #98a2ab;
      --line: #2c353b; --accent: #7fc4c0; --accent-soft: #23373a; --mark: #4a3f12;
    }
  }
  * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    margin: 0; background: var(--bg); color: var(--ink);
    font: 17px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    padding-bottom: env(safe-area-inset-bottom);
  }
  header {
    position: sticky; top: 0; z-index: 5; background: var(--bg);
    border-bottom: 1px solid var(--line);
    padding: calc(10px + env(safe-area-inset-top)) 12px 8px;
  }
  .row { display: flex; gap: 8px; align-items: center; }
  h1 { font-size: 18px; margin: 0 0 8px; letter-spacing: .2px; }
  #q {
    flex: 1; min-width: 0; font: inherit; padding: 10px 12px; border-radius: 12px;
    border: 1px solid var(--line); background: var(--card); color: var(--ink);
  }
  #q:focus { outline: 2px solid var(--accent); }
  .tgl {
    font: inherit; font-size: 14px; padding: 9px 12px; border-radius: 12px; white-space: nowrap;
    border: 1px solid var(--line); background: var(--card); color: var(--ink);
  }
  .tgl[aria-pressed="true"] { background: var(--accent); color: #fff; border-color: var(--accent); }
  .chips {
    display: flex; gap: 8px; overflow-x: auto; padding: 10px 0 4px;
    scrollbar-width: none; -webkit-overflow-scrolling: touch;
  }
  .chips::-webkit-scrollbar { display: none; }
  .chip {
    flex: none; font: inherit; font-size: 14px; padding: 7px 13px; border-radius: 999px;
    border: 1px solid var(--line); background: var(--card); color: var(--ink);
  }
  .chip small { color: var(--muted); margin-left: 4px; }
  .chip[aria-pressed="true"] { background: var(--accent); color: #fff; border-color: var(--accent); }
  .chip[aria-pressed="true"] small { color: #d7ecea; }
  #count { color: var(--muted); font-size: 13px; padding: 8px 14px 0; }
  main { padding: 8px 12px 40px; max-width: 760px; margin: 0 auto; }
  .card {
    background: var(--card); border: 1px solid var(--line); border-radius: 14px;
    padding: 13px 15px; margin: 10px 0;
  }
  .top { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px; }
  .word { font-size: 21px; font-weight: 700; }
  .pos { font-size: 12px; color: var(--accent); background: var(--accent-soft); padding: 2px 8px; border-radius: 999px; }
  .pron { color: var(--muted); font-size: 14px; }
  .def { margin: 6px 0 4px; }
  .ex { margin: 4px 0; color: var(--muted); font-style: italic; }
  .ex b { color: var(--ink); font-style: normal; background: var(--mark); border-radius: 3px; padding: 0 2px; }
  .meta { margin-top: 6px; font-size: 14px; color: var(--muted); }
  .meta span { display: inline-block; margin: 2px 10px 2px 0; }
  .meta em { font-style: normal; font-weight: 600; color: var(--ink); }
  .tags { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px; }
  .tag { font-size: 12px; color: var(--muted); border: 1px solid var(--line); border-radius: 999px; padding: 1px 8px; }
  .compact .def, .compact .ex, .compact .meta, .compact .tags { display: none; }
  .compact .card { cursor: pointer; }
  .compact .card.open .def, .compact .card.open .ex, .compact .card.open .meta, .compact .card.open .tags { display: block; }
  .compact .card.open .tags { display: flex; }
  .empty { text-align: center; color: var(--muted); padding: 48px 12px; }
  #up {
    position: fixed; right: 14px; bottom: calc(16px + env(safe-area-inset-bottom));
    width: 46px; height: 46px; border-radius: 50%; border: none; font-size: 20px;
    background: var(--accent); color: #fff; box-shadow: 0 3px 10px rgba(0,0,0,.25); display: none;
  }
</style>
</head>
<body>
<header>
  <h1>My Words</h1>
  <div class="row">
    <input id="q" type="search" placeholder="Search a word or meaning" autocomplete="off" autocapitalize="off" spellcheck="false">
    <button class="tgl" id="compact" aria-pressed="false">Compact</button>
  </div>
  <div class="chips" id="chips"></div>
</header>
<div id="count"></div>
<main id="list"></main>
<button id="up" aria-label="Back to top">&#8593;</button>

<script>
var DB = /*DATA*/;

(function () {
  var words = DB.words.slice().sort(function (a, b) {
    return a.w.toLowerCase().localeCompare(b.w.toLowerCase());
  });
  var topics = DB.topics;
  var state = { topic: "all", q: "", compact: false };
  try {
    var saved = JSON.parse(localStorage.getItem("wb-state") || "{}");
    if (saved.topic && (saved.topic === "all" || topics.indexOf(saved.topic) > -1)) state.topic = saved.topic;
    if (saved.compact) state.compact = true;
  } catch (e) {}

  var $ = function (id) { return document.getElementById(id); };
  function save() {
    try { localStorage.setItem("wb-state", JSON.stringify({ topic: state.topic, compact: state.compact })); } catch (e) {}
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function reEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  function counts() {
    var c = { all: words.length };
    topics.forEach(function (t) { c[t] = 0; });
    words.forEach(function (w) { w.t.forEach(function (t) { c[t] = (c[t] || 0) + 1; }); });
    return c;
  }
  var C = counts();

  function buildChips() {
    var html = "";
    var all = ["all"].concat(topics);
    all.forEach(function (t) {
      var label = t === "all" ? "All" : t;
      html += '<button class="chip" data-t="' + esc(t) + '" aria-pressed="' + (state.topic === t) + '">' +
        esc(label) + "<small>" + C[t] + "</small></button>";
    });
    $("chips").innerHTML = html;
  }

  function highlight(example, word) {
    var safe = esc(example);
    var head = word.split(/\s+/)[0];
    var stem = head.length > 4 ? head.slice(0, head.length - 1) : head;
    var re = new RegExp("(" + reEsc(esc(word)) + "|\\b" + reEsc(esc(stem)) + "\\w*)", "i");
    return safe.replace(re, "<b>$1</b>");
  }

  function cardHtml(w) {
    var h = '<article class="card"><div class="top"><span class="word">' + esc(w.w) + '</span>';
    if (w.p) h += '<span class="pos">' + esc(w.p) + "</span>";
    if (w.r) h += '<span class="pron">' + esc(w.r) + "</span>";
    h += "</div>";
    h += '<div class="def">' + esc(w.d) + "</div>";
    if (w.e) h += '<div class="ex">' + highlight(w.e, w.w) + "</div>";
    var meta = "";
    if (w.f) w.f.forEach(function (f) { meta += "<span><em>" + esc(f[0]) + ":</em> " + esc(f[1]) + "</span>"; });
    if (w.s) meta += "<span><em>similar:</em> " + esc(w.s.slice(0, 8).join(", ")) + "</span>";
    if (w.c) meta += "<span><em>use:</em> " + esc(w.c.join(", ")) + "</span>";
    if (meta) h += '<div class="meta">' + meta + "</div>";
    h += '<div class="tags">' + w.t.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>";
    return h + "</article>";
  }

  function render() {
    var q = state.q.trim().toLowerCase();
    var out = words.filter(function (w) {
      if (state.topic !== "all" && w.t.indexOf(state.topic) === -1) return false;
      if (!q) return true;
      return w.w.toLowerCase().indexOf(q) > -1 || w.d.toLowerCase().indexOf(q) > -1 ||
        (w.e && w.e.toLowerCase().indexOf(q) > -1);
    });
    $("count").textContent = out.length + (out.length === 1 ? " word" : " words") +
      (state.topic === "all" ? "" : " in " + state.topic);
    $("list").className = state.compact ? "compact" : "";
    $("list").innerHTML = out.length ? out.map(cardHtml).join("") : '<div class="empty">No words found</div>';
  }

  $("chips").addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (!b) return;
    state.topic = b.getAttribute("data-t");
    save(); buildChips(); render();
    window.scrollTo(0, 0);
  });
  $("q").addEventListener("input", function (e) { state.q = e.target.value; render(); });
  $("compact").addEventListener("click", function () {
    state.compact = !state.compact;
    this.setAttribute("aria-pressed", state.compact);
    save(); render();
  });
  $("list").addEventListener("click", function (e) {
    if (!state.compact) return;
    var c = e.target.closest(".card");
    if (c) c.classList.toggle("open");
  });
  $("up").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  window.addEventListener("scroll", function () {
    $("up").style.display = window.scrollY > 600 ? "block" : "none";
  }, { passive: true });

  $("compact").setAttribute("aria-pressed", state.compact);
  buildChips(); render();
})();
</script>
</body>
</html>
"""

if __name__ == "__main__":
    main()
