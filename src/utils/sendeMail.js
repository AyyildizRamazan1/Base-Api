const nodemailer = require("nodemailer");

const sendEmail = async (mailOptions) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Hata Çıktı Mail Gönderilmedi:", error);
    }
    console.log(info);
    return true;
  });
};

module.exports = sendEmail;
