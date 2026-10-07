// npm i xlsx   (SheetJS)
import XLSX from "xlsx";
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet([["Title:", "{R-TITLE}"]]), "Sheet1");
XLSX.writeFile(wb, "sheetjs_template.xlsx");
