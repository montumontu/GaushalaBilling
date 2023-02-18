const pdf = require('html-pdf');
const ejs = require('ejs');
const dateFormat= require("./modules/utils/date");
config = {
  "format": "Legal",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
  "orientation": "landscape", // portrait or landscape
}
const month = dateFormat.getNextMonth();
const currentDate = new Date().toISOString().split('T')[0];


const createPDFFile = async (data1) => {
  return new Promise((resolve, reject)=> {
    const randomNumber = `NGG${Date.now()}`

    ejs.renderFile('invoice.ejs', { data: data1, month, currentDate, randomNumber }, config, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("------------------------------------",data1[0]);
        pdf.create(data, config).toFile(`./invoicepdf/${data1[0]}-${month}.pdf`, function(err, res) {
          if (err) return console.log(err);
          console.log(res);
          resolve(`./${data1[0]}-${month}.pdf`);
        });
      }
    });

  });
}


//createPDFFile(data1);

module.exports = {
  createPDFFile,
}
