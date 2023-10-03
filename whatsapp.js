const venom = require('venom-bot');
const recipient = '919474309855@c.us';

const sendBill = async (billDetails) => {
  for (let bill of billDetails) {
    const filepath = `./invoicepdf/${bill.fileName}`;
    const client = await venom.create();
    const message = await client.sendText(`91${bill.mobile}@c.us`, 'Namaste from Gaushala-bot!');
    console.log('Message sent: ', message); // Send the file
    const sendFileResult = await client.sendFile(
      recipient,
      filepath,
      'April Bill', // Optional caption for the file
      bill.fileName // Optional filename for the file
    );
    console.log(sendFileResult);
  }
}
module.exports = { sendBill };

// Replace filepath with the path to the file you want to send
(async ()=>{
  await sendBill([ { fileName: 'Amit Tulsiyan -April.pdf', mobile: '9206105139' } ]);
})();
