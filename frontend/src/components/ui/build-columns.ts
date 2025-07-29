import type { ColumnDef } from "@tanstack/react-table";

function formatMoneyFr(val?: string) {
  if (!val) return "";
  const num = parseFloat(String(val).replace(/\s/g, '').replace(',', '.'));
  if (isNaN(num)) return val;
  return num
    .toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true
    })
    .replace(/\u00A0/g, ' ');
}

export function buildColumnsFromLabels(labels: string[]): ColumnDef<unknown, unknown>[] {
  return labels.map((label) => ({
    accessorKey: label,
    header: label.charAt(0).toUpperCase() + label.slice(1),
    cell: (info) => {
      if (label.toLowerCase() === "total-à-payer" || label.toLowerCase() === "total-a-payer") {
        return formatMoneyFr(info.getValue() as string);
      }
      return info.getValue();
    },
    enableSorting: true,
  }));
}
