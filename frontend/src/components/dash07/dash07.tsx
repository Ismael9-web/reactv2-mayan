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
}
