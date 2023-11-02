//const pdf = require('html-pdf');
const ejs = require('ejs');
const nextMonth = require("./modules/utils/nextMonth");
const nextMonthObj = new nextMonth();
config = {
  "format": "Legal",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
  "orientation": "landscape",
  "timeout": 50000  // portrait or landscape
}
const month = "October" || nextMonthObj.get();
const currentDate = new Date().toISOString().split('T')[0];


const createPDFFile = async (data1) => {
  return new Promise((resolve, reject) => {
    const randomNumber = `NGG${Date.now()}`

    ejs.renderFile('invoice.ejs', { data: data1, month, currentDate, randomNumber }, config, async (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("------------------------------------", data, data1[0]);
        const puppeteer = require('puppeteer');

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1000, height: 595 }); // Adjust the dimensions as needed
        await page.setContent(data);
        await page.pdf({ path: `./invoicepdf/${data1[0]}-${month}.pdf`, format: 'A4', landscape: true });
        await browser.close();
        resolve(`${data1[0]}-${month}.pdf`);

        // pdf.create(data, config).toFile(`./invoicepdf/${data1[0]}-${month}.pdf`, function (err, res) {
        //   if (err) return console.log(err);
        //   console.log(res);
        //   resolve(`${data1[0]}-${month}.pdf`);
        // });
      }
    });

  });
}


//createPDFFile(data1);

module.exports = {
  createPDFFile,
}


// const sendGrid = require("sendgrid");
// const sendSMS = async (name, message, mobileNumbers,) => {
//     sendGrid.sendSMS(`Hi ${name} ${message}`, `${areaCode}${mobileNumber}`);
// }


// const sms = require("./sms.controller");
// const sendMessages = () => {
//   try {
//     if (!name || !message || !mobileNumbers?.length) {
//       throw new Error("Valid Data not foun");
//     }
//     const areaCode = findAreaCode(mobileNumber);
//     for (const mobileNumber of mobileNumbers) {
//       sms.send(`Hi ${name} ${message}`, `${areaCode}${mobileNumber}`);
//     }
//   } catch (error) {
//     // handle the error
//   }
// }