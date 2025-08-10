
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Helper to sum Montant par mois (accepts French formatted numbers)
function sumMontantParMois(data: Record<string, string>[], colName: string): number {
  console.log('[sumMontantParMois] Summing column:', colName, 'on data:', data);
  return data.reduce((sum, row) => {
    const val = row[colName];
    if (!val) return sum;
    const cleaned = cleanNumberString(val);
    const num = parseFloat(cleaned);
    if (isNaN(num)) {
      console.warn('[sumMontantParMois] Could not parse value:', val, 'cleaned:', cleaned, 'row:', row);
    }
    return isNaN(num) ? sum : sum + num;
  }, 0);
}

// Enhanced number cleaning function
function cleanNumberString(val: string): string {
  if (!val || typeof val !== 'string') {
    console.warn('[cleanNumberString] Invalid input:', val);
    return '0';
  }

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
  console.log('[exportTableToPDF] Called with columns:', columns, 'data:', data, 'filename:', filename);
  const isExpired = (row: Record<string, string>) => {
    const dateFinCol = Object.keys(row).find(k =>
      k
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/[-_\s]/g, '')
        .toLowerCase()
        .includes('datefin')
    );
    if (!dateFinCol) {
      console.log('[isExpired] No date-fin column found in row:', row);
      return true;
    }
    const val = row[dateFinCol];
    if (!val) {
      console.log('[isExpired] No value for date-fin in row:', row);
      return true;
    }
    let date: Date | null = null;
    // Accept dd-mm-yyyy, dd/mm/yyyy, yyyy-mm-dd, yyyy/mm/dd
    if (/^\d{2}-\d{2}-\d{4}$/.test(val)) {
      const [day, month, year] = val.split('-');
      date = new Date(Number(year), Number(month) - 1, Number(day));
    } else if (/^\d{2}\/\d{2}\/\d{4}$/.test(val)) {
      const [day, month, year] = val.split('/');
      date = new Date(Number(year), Number(month) - 1, Number(day));
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
      date = new Date(val);
    } else if (/^\d{4}\/\d{2}\/\d{2}$/.test(val)) {
      const [year, month, day] = val.split('/');
      date = new Date(Number(year), Number(month) - 1, Number(day));
    } else {
      const parsed = Date.parse(val);
      if (!isNaN(parsed)) date = new Date(parsed);
    }
    if (!date || isNaN(date.getTime())) {
      console.log('[isExpired] Could not parse date-fin value:', val, 'row:', row);
      return true;
    }
    const today = new Date();
    today.setHours(0,0,0,0);
    date.setHours(0,0,0,0);
    const expired = !(date > today);
    console.log('[isExpired] Row date-fin:', val, 'parsed:', date, 'expired:', expired, 'row:', row);
    return expired;
  };
  // Filter and log which rows are expired for debug
  let filteredData = data.filter(row => {
    const expired = isExpired(row);
    if (expired) {
      console.log('[exportTableToPDF] Excluding expired row:', row);
    }
    return !expired;
  });
  console.log('[exportTableToPDF] Filtered data (non-expired):', filteredData);
  // If filtering removes everything, fallback to exporting all data (with a warning)
  if (!columns || columns.length === 0) {
    console.warn('[exportTableToPDF] No columns provided:', columns);
  }
  if (!filteredData || filteredData.length === 0) {
    console.warn('[exportTableToPDF] No data to export after filtering, exporting all data instead.');
    filteredData = data;
  }
  console.log('[exportTableToPDF] Final data to export:', filteredData);

  // Enhanced money formatting function
  function formatMoneyFr(val?: string): string {
  if (!val) {
    console.warn('[formatMoneyFr] No value provided');
    return "0,00";
  }
  const cleaned = cleanNumberString(val);
  const num = parseFloat(cleaned);
  if (isNaN(num)) {
    console.warn('[formatMoneyFr] Could not parse number:', val, 'cleaned to:', cleaned);
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
    console.log('[addLogoAndTable] Called with logoDataUrl:', !!logoDataUrl);
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

    console.log('[addLogoAndTable] Columns:', columns);
    console.log('[addLogoAndTable] Data:', filteredData);
    autoTable(doc, {
      startY: 40,
      head: [columns],
      body: filteredData.map(row =>
        columns.map(col => {
          // Defensive: try both direct and normalized key lookup
          let value = row[col];
          if (value === undefined) {
            const foundKey = Object.keys(row).find(k =>
              k.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[-_ ]/g, '').toUpperCase() ===
              col.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[-_ ]/g, '').toUpperCase()
            );
            value = foundKey ? row[foundKey] : '';
            if (foundKey) {
              console.log('[addLogoAndTable] Matched column', col, 'to row key', foundKey, 'value:', value);
            } else {
              console.warn('[addLogoAndTable] No match for column', col, 'in row', row);
            }
          }
          const normalized = col.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[-_ ]/g, '').toUpperCase();
          if (["MONTANT", "MONTANTPARMOIS", "TOTALAPAYER"].includes(normalized)) {
            const formatted = formatMoneyFr(value) + ' Fdj';
            console.log('[addLogoAndTable] Formatting money for column', col, 'value:', value, 'formatted:', formatted);
            return formatted;
          } else if (["DATEFIN", "DATEINITIAL"].includes(normalized)) {
            const formattedDate = formatDateFr(value);
            console.log('[addLogoAndTable] Formatting date for column', col, 'value:', value, 'formatted:', formattedDate);
            return formattedDate;
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
      console.log('[addLogoAndTable] Using column for total:', montantCol);
      total = sumMontantParMois(filteredData, montantCol);
      totalStr = formatMoneyFr(total.toString()) + ' Fdj';
    } else {
      const fallbackCol = columns.find(col => col.toLowerCase().includes('montant'));
      if (fallbackCol) {
        console.log('[addLogoAndTable] Using fallback column for total:', fallbackCol);
        total = sumMontantParMois(filteredData, fallbackCol);
        totalStr = formatMoneyFr(total.toString()) + ' Fdj';
      } else {
        console.warn('[addLogoAndTable] No montant column found for total.');
      }
    }
    // Show total just before the signature line, always
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`Total à payer : ${totalStr}`, 10, pageHeight - 20, { align: "left" });

    // Signed by
    doc.setFontSize(11);
    doc.setFont("helvetica", "italic");
    doc.text("Signé par: ___________________________", pageWidth / 2, pageHeight - 10, { align: "center" });

    doc.save(pdfFilename);
  };

  // Always attempt to generate PDF, even if logo fails to load
  try {
    console.log('[exportTableToPDF] Attempting to load logo:', logoUrl);
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = logoUrl;
    let didCall = false;
    img.onload = function () {
      if (didCall) return;
      didCall = true;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const dataUrl = canvas.toDataURL('image/jpeg');
          console.log('[exportTableToPDF] Logo loaded and converted to dataUrl.');
          addLogoAndTable(dataUrl);
        } else {
          console.warn('[exportTableToPDF] Could not get canvas context for logo.');
          addLogoAndTable();
        }
      } catch (e) {
        console.error('[exportTableToPDF] Error drawing logo:', e);
        addLogoAndTable();
      }
    };
    img.onerror = function () {
      if (didCall) return;
      didCall = true;
      console.warn('[exportTableToPDF] Logo failed to load, proceeding without logo.');
      addLogoAndTable();
    };
    setTimeout(() => {
      if (!didCall) {
        didCall = true;
        console.warn('[exportTableToPDF] Logo load timeout, proceeding without logo.');
        addLogoAndTable();
      }
    }, 2000);
  } catch (e) {
    console.error('[exportTableToPDF] Unexpected error in exportTableToPDF:', e);
    addLogoAndTable();
  }
}
