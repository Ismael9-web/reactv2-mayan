import { AppSidebar } from "@/components/dash07/app-sidebar"
import { ChartAreaInteractive } from "@/components/dash07/chart-area-interactive"
// import { DataTable } from "@/components/dash07/data-table"
// import { SectionCards } from "@/components/dash07/section-cards"
import { SiteHeader } from "@/components/dash07/site-header"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


import { useEffect, useState } from "react"
import api from "@/../services/api.tsx";

export default function Dash07() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    api.get("/documents_with_metadata")
      .then(res => {
        setData(res.data)
        setError("")
      })
      .catch(err => {
        setError("Failed to load data")
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
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
                <DataTable data={data} />
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
