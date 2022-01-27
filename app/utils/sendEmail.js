const nodemailer = require("nodemailer");

const sendEmail = async (email, password, toEmail, emailSubject, emailText) => {
  // Configuring nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  // creating mail options
  const mailOptions = {
    from: email,
    to: toEmail,
    subject: emailSubject,
    text: emailText,
  };

  // Sending email
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = sendEmail;
