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




