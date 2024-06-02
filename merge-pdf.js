const { PDFDocument } = require('pdf-lib');
const fs = require('fs/promises');
const path = require('path');

async function mergePDFsInFolder(folderPath, outputPath) {
    const mergedPdf = await PDFDocument.create();
    
    try {
        const files = await fs.readdir(folderPath);

        for (const file of files) {
            if (file.toLowerCase().endsWith('.pdf')) {
                const pdfPath = path.join(folderPath, file);
                const pdfBytes = await fs.readFile(pdfPath);
                const pdfDoc = await PDFDocument.load(pdfBytes);

                const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                copiedPages.forEach((page) => {
                    mergedPdf.addPage(page);
                });
            }
        }

        const mergedPdfBytes = await mergedPdf.save();
        await fs.writeFile(outputPath, mergedPdfBytes);

        console.log(`Merged PDFs in folder ${folderPath} saved to ${outputPath}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Example usage
const inputFolder = './invoicepdf'; // Replace with your input folder path
const outputPDF = './merged-pdf.pdf'; // Replace with your desired output PDF path

mergePDFsInFolder(inputFolder, outputPDF);
