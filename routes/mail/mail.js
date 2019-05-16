const nodemailer = require('nodemailer');
function send(output) {
  let transporter = nodemailer.createTransport({
    service: "Yandex",
    auth : {
      user: 'info@gokhankoc.pl',
      pass: 'rwgqhvcjdhcxyvrt'
      }
  });

  let mailOptions = {
    from: ' "Nodemailer Contact" <info@gokhankoc.pl>',
    to: 'gokhan_koc@windowslive.com',
    subject: 'New Contact Form Submitted',
    text: 'Hello World',
    html: output
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s' , info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}

module.exports = { send : send };