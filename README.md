# Vocab Trainer

Open `index.html` in your browser (double click). No install, no internet needed.

## Files
- `index.html`, `style.css`, `app.js`: the app.
- `data/words.js`: your word database. Send new words to Claude, or edit it yourself.

## Word format
```
{ "word": "mitigate", "pos": "verb",
  "definition": "to make something harmful less severe",
  "example": "Trees can help mitigate urban heat.",
  "synonyms": ["reduce", "lessen"],
  "collocations": ["mitigate risk"] }
```
Optional `cloze`: a sentence with `____` where the word goes (use it if your example contains an inflected form like "mitigated").

## Quiz flow
1. Pick how many multiple choice, sentence, explain-it and paragraph tasks.
2. Multiple choice is graded on the spot. Wrong answers are other words' definitions of similar length, so the longest option is not a giveaway.
3. At the end, download the `.md` file and give it to Claude for grading of the open-ended answers.

Progress (right/wrong per word) is stored in your browser. Words you miss appear more often.

## Quick sessions
Press "Quick: multiple choice only" on the quiz page. It uses your selected topics and skips the written tasks.

## Optional: AI grading with Groq
1. Copy `.env.example` to `.env` and paste your Groq key after `GROQ_API_KEY=`.
2. In a terminal, in this folder, run `python3 server.py`.
3. Open http://localhost:8000 (not index.html directly).
4. After a quiz, press "Grade with Groq". Scores also feed back into which words come up more often.

The key stays in `.env` on your computer. It is never put in the web page, and `.gitignore` keeps it out of git. Without the server, the app works as before and you can still download the .md for Claude.

## Hosted version (Firebase Hosting)
The same files run as a plain static site, no server needed.
- Progress is saved in each person's own browser (localStorage), so classmates never see or overwrite each other's.
- AI grading uses "bring your own key": paste your own free Groq key (console.groq.com) into the grading box. It stays in your browser and is sent only to Groq. Nobody's key is stored on the site.
- Deploy: `firebase deploy --only hosting` (project id is in `.firebaserc`; `firebase.json` leaves out `server.py`, backups and generated files).

## Hard words and progress
- The Progress tab lists your hard words (missed at least once, not yet answered right more often than wrong), accuracy by topic and your recent sessions.
- "Only my hard words" on the quiz page, or "Practise my hard words" on the Progress tab, quizzes just those.
- Progress is stored in your browser. Opening `index.html` directly and opening `http://localhost:8000` are different places, so they do not share it. Run `python3 server.py` and always open http://localhost:8000: it also saves everything to `data/progress.json`, so nothing is lost.
- To move older progress across, use "Download backup" in one place and "Restore backup" in the other.
