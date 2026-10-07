# Example files for two xtt xlsx pull requests

Every template has `A1 = Title:` and `B1 = {R-TITLE}` and is merged with `R-TITLE = 'ACME Corp'`.
`make_templates.py` recreates the templates (`pip install openpyxl xlsxwriter`).

| Folder | Template | Written by | xtt master | With the fix |
|---|---|---|---|---|
| pr-absolute-sheet-target | openpyxl_template.xlsx | openpyxl 3.1.5 | `{R-TITLE}` not replaced | `ACME Corp` (needs both PRs) |
| pr-absolute-sheet-target | absolute_target_only.xlsx | XlsxWriter + one Target made absolute | `{R-TITLE}` not replaced | `ACME Corp` |
| pr-shared-strings-part | xlsxwriter_template.xlsx | XlsxWriter, constant_memory | Excel asks to repair the file | `ACME Corp` |
| pr-str-cells | sheetjs_template.xlsx | SheetJS 0.18.5 (`make_template.mjs`) | `1`, `0` instead of the texts | `Title:`, `ACME Corp` |

All templates open in Excel without any warning.
