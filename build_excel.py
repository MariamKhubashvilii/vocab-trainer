#!/usr/bin/env python3
"""Builds words-database.xlsx from data/words.js.
One sheet with all words, plus one sheet per topic.
Run again after adding words:  python3 build_excel.py
"""
import re
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

from build_browser import load_array, strip_line_comments

HERE = Path(__file__).resolve().parent
SRC = HERE / "data" / "words.js"
OUT = HERE / "words-database.xlsx"

HEADERS = ["Word", "Meaning", "Example", "More"]
WIDTHS = [26, 48, 58, 44]


def sheet_name(topic, taken):
    name = re.sub(r"[\\/*?:\[\]]", "-", topic)[:31]
    base, i = name, 2
    while name in taken:
        name = base[:28] + "_" + str(i)
        i += 1
    taken.add(name)
    return name


def extra(w):
    parts = []
    if w.get("person"):
        parts.append("person: " + w["person"])
    if w.get("verb"):
        parts.append("verb: " + w["verb"])
    if w.get("noun"):
        parts.append("noun: " + w["noun"])
    if w.get("synonyms"):
        parts.append("similar: " + ", ".join(w["synonyms"][:8]))
    if w.get("collocations"):
        parts.append("use: " + ", ".join(w["collocations"]))
    return "\n".join(parts)


def fill_sheet(ws, rows):
    ws.append(HEADERS)
    head_fill = PatternFill("solid", fgColor="2F5D62")
    for c in ws[1]:
        c.font = Font(bold=True, color="FFFFFF", size=13)
        c.fill = head_fill
        c.alignment = Alignment(vertical="center")
    for w in rows:
        label = w.get("word", "")
        pos = w.get("pos", "")
        if w.get("pron"):
            label += "  " + w["pron"]
        if pos:
            label += "\n(" + pos + ")"
        ws.append([label, w.get("definition", ""), w.get("example", ""), extra(w)])
    for i, width in enumerate(WIDTHS, start=1):
        ws.column_dimensions[get_column_letter(i)].width = width
    for r in ws.iter_rows(min_row=2):
        for c in r:
            c.alignment = Alignment(wrap_text=True, vertical="top")
            c.font = Font(size=13)
        r[0].font = Font(size=14, bold=True)
    ws.freeze_panes = "B2"
    ws.sheet_view.zoomScale = 110


def main():
    text = strip_line_comments(SRC.read_text(encoding="utf-8"))
    topics = load_array(text, "TOPICS_DATA")
    words = load_array(text, "WORDS_DATA")
    words.sort(key=lambda w: w.get("word", "").lower())

    wb = Workbook()
    taken = set()
    ws = wb.active
    ws.title = sheet_name("All words", taken)
    fill_sheet(ws, words)

    used = set()
    for w in words:
        used.update(w.get("topics") or ["general"])
    ordered = [t for t in topics if t in used] + sorted(used - set(topics))

    for t in ordered:
        rows = [w for w in words if t in (w.get("topics") or ["general"])]
        sh = wb.create_sheet(sheet_name(t, taken))
        fill_sheet(sh, rows)

    wb.save(OUT)
    print("Built", OUT.name, "-", len(words), "words,", len(ordered), "topic sheets")


if __name__ == "__main__":
    main()
