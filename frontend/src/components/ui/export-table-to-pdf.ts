import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportTableToPDF(columns: string[], data: Record<string, string>[], filename = "table.pdf") {
  const doc = new jsPDF();
  autoTable(doc, {
    head: [columns],
    body: data.map(row => columns.map(col => row[col] ?? "")),
  });
  doc.save(filename);
}
