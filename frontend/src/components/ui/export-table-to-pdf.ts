
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Helper to sum Montant par mois (accepts French formatted numbers)
function sumMontantParMois(data: Record<string, string>[], colName: string): number {
  return data.reduce((sum, row) => {
    const val = row[colName];
    if (!val) return sum;
    // Clean the value more thoroughly
    const cleaned = cleanNumberString(val);
    const num = parseFloat(cleaned);
    return isNaN(num) ? sum : sum + num;
  }, 0);
}

// Enhanced number cleaning function
function cleanNumberString(val: string): string {
  if (!val || typeof val !== 'string') return '0';

  // Normalize: replace various non-breaking or thin spaces with normal space
  val = val.replace(/\u00A0|\u202F/g, ' ').replace(/\s+/g, ' ');

  // Remove currency symbols (e.g. Fdj, F)
  val = val.replace(/[^\d,.-]/g, ' ');

  // If comma is used as decimal separator, convert it to dot
  const commaParts = val.split(',');
  if (commaParts.length === 2) {
    // "25000,00" → "25000.00"
    return commaParts[0].replace(/\./g, ' ') + '.' + commaParts[1];
  }

  // Else if dot is used, make sure it's the decimal
  const dotParts = val.split('.');
  if (dotParts.length === 2) {
    return dotParts[0].replace(/,/g, '') + '.' + dotParts[1];
  }

  // No decimal, just remove thousand separators
  return val.replace(/[.,]/g, ' ');
}


/**
 * Export table to PDF with French headings, logo, landscape, and total
 * @param columns - table columns
 * @param data - table data
 * @param filename - output filename
 */
export function exportTableToPDF(
  columns: string[],
  data: Record<string, string>[],
  filename?: string
) {
  // Remove expired rows: only export if date-fin is after today (not before or equal)
  const isExpired = (row: Record<string, string>) => {
    // Find the 'date-fin' column (case-insensitive, accent-insensitive)
    const dateFinCol = Object.keys(row).find(k =>
      k
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, ' ')
        .replace(/[-_\s]/g, ' ')
        .toLowerCase()
        .includes('datefin')
    );
    if (!dateFinCol) return true; // If no date-fin column, treat as expired (exclude)
    const val = row[dateFinCol];
    if (!val) return true; // If no value, treat as expired (exclude)
    // Accept formats: YYYY-MM-DD, DD/MM/YYYY, DD-MM-YYYY, MM/DD/YYYY
    let date: Date | null = null;
    if (/^\d{2}-\d{2}-\d{4}$/.test(val)) {
      // dd-mm-yyyy
      const [day, month, year] = val.split('-');
      date = new Date(Number(year), Number(month) - 1, Number(day));
    } else if (/^\d{2}\/\d{2}\/\d{4}$/.test(val)) {
      // Could be dd/mm/yyyy or mm/dd/yyyy, try both
      const [a, b, c] = val.split('/');
      // If day > 12, it's dd/mm/yyyy, else assume mm/dd/yyyy (ambiguous, but common US/FR logic)
      if (Number(a) > 12) {
        date = new Date(Number(c), Number(b) - 1, Number(a));
      } else if (Number(b) > 12) {
        date = new Date(Number(c), Number(a) - 1, Number(b));
      } else {
        // Default: dd/mm/yyyy
        date = new Date(Number(c), Number(b) - 1, Number(a));
      }
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
      // yyyy-mm-dd
      date = new Date(val);
    } else {
      // Try Date parse
      const parsed = Date.parse(val);
      if (!isNaN(parsed)) date = new Date(parsed);
    }
    if (!date) return true; // If cannot parse, treat as expired (exclude)
    // Compare to today (ignore time)
    const today = new Date();
    today.setHours(0,0,0,0);
    date.setHours(0,0,0,0);
    // Only export if date-fin is strictly after today
    return !(date > today);
  };
  const filteredData = data.filter(row => !isExpired(row));

  // Enhanced money formatting function
  function formatMoneyFr(val?: string): string {
  if (!val) return "0,00";
  const cleaned = cleanNumberString(val);
  const num = parseFloat(cleaned);
  if (isNaN(num)) {
    console.warn('Could not parse number:', val, 'cleaned to:', cleaned);
    return "0,00";
  }

  // Format using fr-FR, then sanitize spaces for PDF
  return num.toLocaleString('fr-FR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  })
    .replace(/\u202F/g, ' ')  // thin space → regular space
    .replace(/\u00A0/g, ' '); // non-breaking space → regular space
}

  // Dynamic filename: Liste-beneficiaire-YYYY-MM-DD.pdf
  const today = new Date();
  const dateStr = today.toISOString().slice(0, 10); // YYYY-MM-DD
  const pdfFilename = filename || `Liste-beneficiaire-${dateStr}.pdf`;

  // Landscape, A4
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const logoUrl = "/budget.jpeg";
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

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


    // Title: Direction de la Trésorerie Générale with current date (French format)
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    const todayDate = new Date();
    const dateFr = todayDate.toLocaleDateString('fr-FR');
    // Title centered, date right-aligned
    doc.text("Direction de la Trésorerie Générale", pageWidth / 2, 32, { align: "center" });
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(dateFr, pageWidth - 10, 32, { align: "right" });

    // Table with French number formatting for Montant columns
    // Helper to format date to French dd/mm/yyyy
    function formatDateFr(dateStr?: string) {
      if (!dateStr) return "";
      let d: Date | null = null;
      if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
        const [day, month, year] = dateStr.split("-");
        d = new Date(Number(year), Number(month) - 1, Number(day));
      } else if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
        const [day, month, year] = dateStr.split("/");
        d = new Date(Number(year), Number(month) - 1, Number(day));
      } else if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
        const [year, month, day] = dateStr.split("-");
        d = new Date(Number(year), Number(month) - 1, Number(day));
      } else {
        d = new Date(dateStr);
      }
      if (!d || isNaN(d.getTime())) return dateStr;
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    }

    autoTable(doc, {
      startY: 40,
      head: [columns],
      body: filteredData.map(row =>
        columns.map(col => {
          const normalized = col.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[-_ ]/g, '').toUpperCase();
          const value = row[col] ?? "";
          if (["MONTANT", "MONTANTPARMOIS", "TOTALAPAYER"].includes(normalized)) {
            const formatted = formatMoneyFr(value) + ' Fdj';
            console.log('MONEY DEBUG:', {
              column: col,
              original: value,
              cleaned: cleanNumberString(value),
              parsed: parseFloat(cleanNumberString(value)),
              formatted: formatted
            });
            return formatted;
          } else if (["DATEFIN", "DATEINITIAL"].includes(normalized)) {
            return formatDateFr(value);
          }
          return value;
        })
      ),
      theme: 'grid',
      styles: {
        font: "helvetica",
        fontSize: 7.5,
        cellPadding: { top: 1, right: 1, bottom: 1, left: 1 },
        overflow: 'linebreak',
        valign: 'middle',
        minCellHeight: 6,
        lineColor: [220, 220, 220],
        lineWidth: 0.1,
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 8,
        halign: 'center',
        valign: 'middle',
        minCellHeight: 7,
      },
      bodyStyles: {
        textColor: 20,
        halign: 'left',
        valign: 'middle',
        minCellHeight: 6,
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      margin: { left: 8, right: 8 },
      tableWidth: 'auto',
      columnStyles: columns.reduce((acc: Record<number, object>, col, idx) => {
        const normalized = col.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[-_ ]/g, '').toUpperCase();
        if (["MONTANT", "MONTANTPARMOIS", "TOTALAPAYER"].includes(normalized)) {
          acc[idx] = { halign: 'right', cellWidth: 28 };
        } else if (["DATEFIN", "DATEINITIAL"].includes(normalized)) {
          acc[idx] = { halign: 'center', cellWidth: 22 };
        } else {
          acc[idx] = { cellWidth: 'auto' };
        }
        return acc;
      }, {}),
      didDrawPage: () => {},
      didParseCell: function (data) {
        // Right-align body cells for money columns
        if (data.section === 'body') {
          const colName = columns[data.column.index];
          const normalized = colName.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[-_ ]/g, '').toUpperCase();
          if (["MONTANT", "MONTANTPARMOIS", "TOTALAPAYER"].includes(normalized)) {
            data.cell.styles.halign = 'right';
          }
        }
      },
    });

    // Calculate total for "Montant par mois" (case-insensitive, accent-insensitive)
    const montantCol = columns.find(col => col.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().includes('montantparmois'));
    let total = 0;
    let totalStr = '';
    if (montantCol) {
      total = sumMontantParMois(filteredData, montantCol);
      totalStr = formatMoneyFr(total.toString()) + ' Fdj';
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      // Show total at left, not count
      doc.text(`Total à payer : ${totalStr}`, 10, pageHeight - 25, { align: "left" });
    }

    // Signed by
    doc.setFontSize(11);
    doc.setFont("helvetica", "italic");
    doc.text("Signé par: ___________________________", pageWidth / 2, pageHeight - 10, { align: "center" });

    doc.save(pdfFilename);
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
