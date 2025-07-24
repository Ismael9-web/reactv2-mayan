

import jsPDF from "jspdf";
import "jspdf-autotable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState, useMemo } from "react";

export type DataTableProps = {
  columns: string[];
  rows: Record<string, string>[];
};

export function DataTable({ columns, rows }: DataTableProps) {
  const [filter, setFilter] = useState("");

  const filteredRows = useMemo(() => {
    if (!filter) return rows;
    const lower = filter.toLowerCase();
    return rows.filter(row =>
      columns.some(col => (row[col] || "").toLowerCase().includes(lower))
    );
  }, [rows, filter, columns]);

  const handleExportPDF = () => {
    const docPDF = new jsPDF();
    const tableData = filteredRows.map(row => columns.map(col => row[col] || ""));
    (docPDF as jsPDF & { autoTable: (options: unknown) => jsPDF }).autoTable({
      head: [columns],
      body: tableData,
      styles: { cellPadding: 2, fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] },
    });
    docPDF.save("approved_documents_metadata.pdf");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <Input
          placeholder="Filter by any column..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="max-w-xs"
        />
        <Button onClick={handleExportPDF} variant="outline" className="ml-auto w-fit">
          Download PDF
        </Button>
      </div>
      <div className="overflow-x-auto">
        {filteredRows.length === 0 ? (
          <div className="p-4 text-center">No documents found.</div>
        ) : (
          <table className="min-w-full border border-gray-200 bg-white">
            <thead>
              <tr>
                {columns.map(col => (
                  <th key={col} className="border px-4 py-2">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, idx) => (
                <tr key={row.id || idx}>
                  {columns.map(col => (
                    <td key={col} className="border px-4 py-2">{row[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
