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


type Metadata = {
  [key: string]: unknown;
};

type Document = {
  id: number;
  label?: string;
  description?: string;
  metadata?: Metadata[];
  [key: string]: unknown;
};

type DataTableProps = {
  data: Document[];
};

export function DataTable({ data }: DataTableProps) {
  if (!data || data.length === 0) {
    return <div className="p-4 text-center">No documents found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Label</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Metadata</th>
          </tr>
        </thead>
        <tbody>
          {data.map((doc) => (
            <tr key={doc.id}>
              <td className="border px-4 py-2">{doc.id}</td>
              <td className="border px-4 py-2">{doc.label || "-"}</td>
              <td className="border px-4 py-2">{doc.description || "-"}</td>
              <td className="border px-4 py-2">
                {doc.metadata && doc.metadata.length > 0 ? (
                  <ul className="list-disc pl-4">
                    {doc.metadata.map((meta, idx) => (
                      <li key={idx}>
                        {Object.entries(meta).map(([k, v]) => (
                          <span key={k}><b>{k}:</b> {String(v)}; </span>
                        ))}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




