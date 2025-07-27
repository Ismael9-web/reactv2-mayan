


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
    <div className="rounded-lg border bg-background p-4 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
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
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-muted">
              {columns.map(col => (
                <th
                  key={col}
                  className="whitespace-nowrap px-4 py-2 text-left text-xs font-semibold text-muted-foreground border-b"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-8 text-muted-foreground">
                  No documents found.
                </td>
              </tr>
            ) : (
              filteredRows.map((row, idx) => (
                <tr
                  key={row.id || idx}
                  className="bg-card hover:bg-accent transition-colors border rounded-lg shadow-sm"
                >
                  {columns.map(col => (
                    <td
                      key={col}
                      className="whitespace-nowrap px-4 py-2 text-sm border-b"
                    >
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
