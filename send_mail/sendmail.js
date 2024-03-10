const nodemailer = require("nodemailer");

const sendingmail = async (to, subject, messagecontent) => {
  try {
    //this method is used to create a platfrom to to get the  receiver details
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "kavitipavansai4160@gmail.com",
        pass: "ywhvwfdnbcssfhcm",
      },
    });
    // creating a message object
    const message = {
      to,
      subject,
      html: `<p>you have a new message</p><p>message: ${messagecontent}</p>`,
    };
    //send config mail
    const info = await transporter.sendMail(message);
    console.log("message sent");
  } catch (error) {
    console.log("error found:", error);
  }
};
module.exports = sendingmail;
