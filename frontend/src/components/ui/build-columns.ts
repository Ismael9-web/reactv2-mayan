import type { ColumnDef } from "@tanstack/react-table";

export function buildColumnsFromLabels(labels: string[]): ColumnDef<unknown, unknown>[] {
  return labels.map((label) => ({
    accessorKey: label,
    header: label.charAt(0).toUpperCase() + label.slice(1),
    cell: (info) => info.getValue(),
    enableSorting: true,
  }));
}
