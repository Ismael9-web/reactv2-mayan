import { useEffect, useMemo, useState } from "react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import api from "../../../services/api";
import budgetLogo from "../assets/budget.jpeg";
// French date and number formatting helpers
function formatDateFr(dateStr?: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("fr-FR");
}
function formatMoneyFr(val?: string) {
  if (!val) return "";
  // Remove spaces, replace comma with dot for parseFloat, then format
  const num = parseFloat(val.replace(/\s/g, '').replace(',', '.'));
  if (isNaN(num)) return val;
  return num.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
import { exportTableToPDF } from "../ui/export-table-to-pdf";
import { Trash2 } from "lucide-react";

interface RowData {
  [key: string]: string;
}


export default function ApprovedDocumentsPage() {
  const [data, setData] = useState<RowData[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [visibleColumns, setVisibleColumns] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    api.get("/approved_documents_metadata")
      .then((res) => {
        setLabels(res.data.columns);
        setVisibleColumns(res.data.columns); // all columns visible by default
        setData(res.data.rows);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filtering
  const filteredData = data.filter((row) =>
    labels.some((col) => row[col]?.toLowerCase().includes(search.toLowerCase()))
  );

  // Sorting
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const sortedData = useMemo(() => {
    if (!sortBy) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortBy] || '';
      const bVal = b[sortBy] || '';
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortBy, sortDir]);

  // Pagination
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const pageCount = Math.ceil(sortedData.length / pageSize);
  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, page, pageSize]);

  // Column visibility toggle
  const handleToggleColumn = (col: string) => {
    setVisibleColumns((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    );
  };

  // Row selection
  const handleSelectRow = (rowIdx: number) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(rowIdx)) {
        newSet.delete(rowIdx);
      } else {
        newSet.add(rowIdx);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    if (paginatedData.every((_, i) => selectedRows.has(i))) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map((_, i) => i)));
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gray-50">
      <header className="w-full flex items-center justify-center py-6 bg-white/90 shadow">
        <img src={budgetLogo} alt="Logo Ministère du Budget" className="h-16 w-auto rounded shadow" />
      </header>
      <div className="flex-1 flex flex-col items-center justify-start">
        <Card className="p-6 mt-8 w-full max-w-7xl bg-white/90 backdrop-blur-md shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h2 className="text-2xl font-bold">Approved Documents</h2>
            <div className="flex gap-2 items-center">
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="max-w-xs"
              />
              <button
                className="px-3 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
                onClick={() => exportTableToPDF(visibleColumns, sortedData)}
              >
                Export PDF
              </button>
              {/* Column visibility dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300">Columns</button>
                <div className="absolute z-10 left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                  {labels.map((col) => (
                    <label key={col} className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100">
                      <input
                        type="checkbox"
                        checked={visibleColumns.includes(col)}
                        onChange={() => handleToggleColumn(col)}
                        className="mr-2"
                      />
                      {col.charAt(0).toUpperCase() + col.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center py-8 text-gray-500">Loading...</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={paginatedData.length > 0 && paginatedData.every((_, i) => selectedRows.has(i))}
                          onChange={handleSelectAll}
                          title="Select all rows"
                        />
                      </th>
                      {visibleColumns.map((label) => (
                        <th
                          key={label}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer select-none"
                          onClick={() => {
                            if (sortBy === label) {
                              setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
                            } else {
                              setSortBy(label);
                              setSortDir('asc');
                            }
                          }}
                        >
                          {label.charAt(0).toUpperCase() + label.slice(1)}
                          {sortBy === label ? (sortDir === 'asc' ? ' ▲' : ' ▼') : ''}
                        </th>
                      ))}
                      <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedData.map((row, i) => (
                      <tr key={i} className={selectedRows.has(i) ? "bg-blue-50" : ""}>
                        <td className="px-4 py-4 text-center">
                          <input
                            type="checkbox"
                            checked={selectedRows.has(i)}
                            onChange={() => handleSelectRow(i)}
                            title="Select row"
                          />
                        </td>
                        {visibleColumns.map((label) => {
                          let value = row[label];
                          if (["DATE-FIN", "DATE-INITIAL"].includes(label.toUpperCase())) {
                            value = formatDateFr(value);
                          } else if (["MONTANT PAR MOIS", "TOTAL-A-PAYER"].includes(label.toUpperCase())) {
                            value = formatMoneyFr(value);
                          }
                          return (
                            <td key={label} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              {value}
                            </td>
                          );
                        })}
                        <td className="px-4 py-4 text-center">
                          <button
                            className="p-2 rounded hover:bg-red-100 text-red-600 hover:text-red-800 transition-colors"
                            title="Delete row"
                            onClick={() => alert('Delete action for row ' + (row.id || i))}
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination Controls */}
              <div className="flex justify-center items-center mt-4">
                <button
                  className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50 mx-2"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Précédent
                </button>
                <span className="mx-2">
                  Page {page} sur {pageCount}
                </span>
                <button
                  className="px-2 py-1 rounded bg-gray-200 disabled:opacity-50 mx-2"
                  onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                  disabled={page === pageCount}
                >
                  Suivant
                </button>
              </div>
            </>
          )}
        </Card>
      </div>
      <footer className="w-full text-center py-4 text-gray-700 bg-white/80 mt-8">
        &copy; Ministère du Budget @ 2025
      </footer>
    </div>
  );
}
