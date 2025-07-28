<<<<<<< HEAD
import "jspdf-autotable"
import { z } from "zod"


export const schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
})


import React, { useEffect, useState } from "react"
import api from "@/../services/api"

export function DataTable() {
  type RowType = z.infer<typeof schema>
  const [data, setData] = useState<RowType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    api.get("/documents_with_metadata")
      .then(res => {
        // Validate and filter data using schema
        const parsed = Array.isArray(res.data)
          ? res.data.map((item: unknown) => {
              const result = schema.safeParse(item)
              return result.success ? result.data : null
            }).filter((item): item is RowType => item !== null)
          : []
        setData(parsed)
        setError("")
      })
      .catch(() => {
        setError("Failed to load data")
      })
      .finally(() => setLoading(false))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="p-8 text-center">Loading...</div>
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Header</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Limit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviewer</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, idx) => (
            <tr key={row.id || idx}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.header}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.target}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.limit}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.reviewer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
=======
>>>>>>> refs/remotes/origin/master



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
