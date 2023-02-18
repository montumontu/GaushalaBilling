const nodemailer = require('nodemailer');

// Create a transport object for sending emails
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'nynptel@gmail.com',
    pass: ''
  }
});

// Define the email options, including the attachment
const mailOptions = {
  from: 'nynptel@gmail.com',
  to: 'nynptel@gmail.com',
  subject: 'Email with Attachment',
  text: 'Please see attached file',
  attachments: [
    {
      filename: 'invoice.zip',
      path: '/invoice.zip'
    }
  ]
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
