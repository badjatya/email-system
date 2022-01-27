const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.EMAIL_GRID_API_KEY);

const sendEmail = (emailTo, emailFrom, emailSubject, emailText) => {
  sgMail.send({
    to: emailTo,
    from: emailFrom,
    subject: emailSubject,
    text: emailText,
  });
};

module.exports = sendEmail;
