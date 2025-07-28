<<<<<<< HEAD
// import { DataTable } from "./data-table"

// Example data for the custom DataTable
const data = [
  {
    id: 1,
    header: "Budget Review",
    type: "Finance",
    status: "Pending",
    target: "Q3",
    limit: "$10,000",
    reviewer: "Olivia Martin",
  },
  {
    id: 2,
    header: "Project Launch",
    type: "Operations",
    status: "Approved",
    target: "Q2",
    limit: "$50,000",
    reviewer: "James Smith",
  },
  {
    id: 3,
    header: "Security Audit",
    type: "IT",
    status: "In Progress",
    target: "Q4",
    limit: "$5,000",
    reviewer: "Emma Johnson",
  },
];

interface DataTableProps {
  data: {
    id: number;
    header: string;
    type: string;
    status: string;
    target: string;
    limit: string;
    reviewer: string;
  }[];
}

export function DataTable({ data }: DataTableProps) {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded">
      <thead>
        <tr>
          <th className="px-4 py-2 border-b">Header</th>
          <th className="px-4 py-2 border-b">Type</th>
          <th className="px-4 py-2 border-b">Status</th>
          <th className="px-4 py-2 border-b">Target</th>
          <th className="px-4 py-2 border-b">Limit</th>
          <th className="px-4 py-2 border-b">Reviewer</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="px-4 py-2 border-b">{row.header}</td>
            <td className="px-4 py-2 border-b">{row.type}</td>
            <td className="px-4 py-2 border-b">{row.status}</td>
            <td className="px-4 py-2 border-b">{row.target}</td>
            <td className="px-4 py-2 border-b">{row.limit}</td>
            <td className="px-4 py-2 border-b">{row.reviewer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Dash07() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl">
        <DataTable data={data} />
        
      </div>
    </div>
  );
=======
import { AppSidebar } from "@/components/dash07/app-sidebar"
import { ChartAreaInteractive } from "@/components/dash07/chart-area-interactive"
import { DataTable } from "@/components/dash07/data-table"
// import { SectionCards } from "@/components/dash07/section-cards"
import { SiteHeader } from "@/components/dash07/site-header"

import {
  SidebarInset,
} from "@/components/ui/sidebar"


import { useEffect, useState } from "react"
import api from "@/../services/api.tsx";

export default function Dash07() {
  // Removed unused data and setData state
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    setLoading(true);
    api.get("/approved_documents_metadata")
      .then(res => {
        setColumns(res.data.columns || []);
        setRows(res.data.rows || []);
        setError("");
      })
      .catch(() => {
        setError("Failed to load data");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar className="border-r bg-background">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          {/* TODO: Replace with actual menu component */}
          <div>Sidebar menu goes here</div>
        </div>
      </AppSidebar>
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* <SectionCards /> */}
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              {loading ? (
                <div className="p-8 text-center">Loading...</div>
              ) : error ? (
                <div className="p-8 text-center text-red-500">{error}</div>
              ) : (
                <DataTable columns={columns} rows={rows} />
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
  )
>>>>>>> refs/remotes/origin/master
}
