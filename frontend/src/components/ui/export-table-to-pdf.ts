
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Helper to sum Montant par mois (accepts French formatted numbers)
function sumMontantParMois(data: Record<string, string>[], colName: string): number {
  return data.reduce((sum, row) => {
    let val = row[colName];
    if (!val) return sum;
    // Remove spaces, convert comma to dot
    val = val.replace(/\s/g, '').replace(',', '.');
    const num = parseFloat(val);
    return isNaN(num) ? sum : sum + num;
  }, 0);
}

/**
 * Export table to PDF with French headings, logo, landscape, and total
 * @param columns - table columns
 * @param data - table data
 * @param filename - output filename
 */
export function exportTableToPDF(columns: string[], data: Record<string, string>[], filename = "table.pdf") {
  // Landscape, A4
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

  // Add logo (must be public path for browser)
  const logoUrl = "/budget.jpeg"; // Assumes public/budget.jpeg
  const pageWidth = doc.internal.pageSize.getWidth();

  // Add logo using HTMLImageElement and then drawImage (async)
  const addLogoAndTable = (logoDataUrl?: string) => {
    // Header: République de Djibouti
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("République de Djibouti", pageWidth / 2, 18, { align: "center" });

    // Logo (if available)
    if (logoDataUrl) {
      doc.addImage(logoDataUrl, "JPEG", 10, 10, 30, 30);
    }

    // Title: Direction de la Trésorerie Générale
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Direction de la Trésorerie Générale", pageWidth / 2, 32, { align: "center" });

    // Table
    autoTable(doc, {
      startY: 40,
      head: [columns],
      body: data.map(row => columns.map(col => row[col] ?? "")),
      theme: 'grid',
      styles: { font: "helvetica", fontSize: 9, cellPadding: 2 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' },
      bodyStyles: { textColor: 20 },
      margin: { left: 10, right: 10 },
      tableWidth: 'auto',
      didDrawPage: (dataArg) => {
        // Nothing for now
      },
    });

    // Calculate total for "Montant par mois" (case-insensitive, accent-insensitive)
    const montantCol = columns.find(col => col.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().includes('montantparmois'));
    if (montantCol) {
      const total = sumMontantParMois(data, montantCol);
      const totalStr = total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(`Total Montant par mois : ${totalStr} FDJ`, pageWidth - 10, doc.internal.pageSize.getHeight() - 10, { align: "right" });
    }

    doc.save(filename);
  };

  // Load logo as DataURL (browser only)
  const img = new window.Image();
  img.crossOrigin = "Anonymous";
  img.src = logoUrl;
  img.onload = function () {
    // Create canvas to get DataURL
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg');
      addLogoAndTable(dataUrl);
    } else {
      addLogoAndTable();
    }
  };
  img.onerror = function () {
    addLogoAndTable();
  };
}
