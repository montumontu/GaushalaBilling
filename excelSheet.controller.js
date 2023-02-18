const get = async (sheet)=>{
  const { google } = require("googleapis");
  const auth = new google.auth.GoogleAuth({
    keyFile: "gaushala-376814-471fc6e13d62.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
  });

  // Create client instance for auth
  const client = await auth.getClient();
  

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1HqnHXrKkEwc1l9nA7bmIb8Fm_8PPABi0cFIIK8KvtnU";

  // Get metadata about spreadsheet
  // const metaData = await googleSheets.spreadsheets.get({
  //   auth,
  //   spreadsheetId,
  // });
  // console.log(metaData);

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: sheet,
  });
  console.log(getRows.data.values);
  return getRows.data.values;

  // Write row(s) to spreadsheet
  // await googleSheets.spreadsheets.values.append({
  //   auth,
  //   spreadsheetId,
  //   range: "Sheet1!A:B",
  //   valueInputOption: "USER_ENTERED",
  //   resource: {
  //     values: [[request, name]],
  //   },
  // });
};

module.exports = {
  get,
}