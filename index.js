const excelSheet = require("./excelSheet.controller");
const pdfGenerator = require("./tryejs");
const archive = require("./archiver");
const sheet = "January 2023!A1:AR43";
const dateFormat = require("./modules/utils/date");

const generateBill = async () => {
  const monthlyAllCustomerData = await excelSheet.get(sheet);
  for (let i = 1; i < monthlyAllCustomerData.length; i++) {
    console.log(monthlyAllCustomerData[i]);
    const file = await pdfGenerator.createPDFFile(monthlyAllCustomerData[i]);
    console.log(file);
  }
  const month = dateFormat.getNextMonth();
  const archiveFile = await archive("invoicepdf", "invoice.zip");

  console.log("creation completed of the archive - " + archiveFile);
  return;
}

(async ()=>{
  await generateBill();
})();