const excelSheet = require("./excelSheet.controller");
const pdfGenerator = require("./tryejs");
const archive = require("./archiver");
const sheet = "October 2023!A1:AS29";
const nextMonth = require("./modules/utils/nextMonth");
//const { sendBill } = require("./whatsapp");


const generateBill = async () => {
  const whatsAPP = [];
  const monthlyAllCustomerData = await excelSheet.get(sheet);
  console.log(JSON.stringify(monthlyAllCustomerData));
  for (let i = 1; i < monthlyAllCustomerData.length; i++) {
  // for (let i = 1; i < 2; i++) {
    console.log(monthlyAllCustomerData[i]);
    const file = await pdfGenerator.createPDFFile(monthlyAllCustomerData[i]);
    console.log(file);
    whatsAPP.push({ fileName: file, mobile: monthlyAllCustomerData[i][42]  });
  }
  console.log(JSON.stringify(whatsAPP));
  //await sendBill(whatsAPP);

  const nextMonthObj = new nextMonth();
  const month = "September" || nextMonthObj.get(); // get the last month
  //const archiveFile = await archive("invoicepdf", "invoice.zip");

  //console.log("creation completed of the archive - " + archiveFile);
  return;
}

(async ()=>{
  await generateBill();
})();
