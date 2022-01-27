// Models
const User = require("../models/user");
const Mail = require("../models/mail");

// Utils
const customError = require("../utils/customError");
const sendEmail = require("../utils/sendEmail");

// User profile
exports.getSignedInUserProfile = async (req, res) => {
  try {
    // Sending response
    res.json({
      status: "success",
      user: {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
      },
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};

// User sends an email
exports.signedInUserSendsAMail = async (req, res) => {
  try {
    const { toEmail, emailSubject, emailText } = req.body;

    // Checking all the fields are present
    if (!toEmail || !emailSubject || !emailText) {
      return customError(
        res,
        400,
        "toEmail, emailSubject and emailText are required"
      );
    }

    // Sending email
    const isEmailSent = await sendEmail(
      req.user.email,
      req.password,
      toEmail,
      emailSubject,
      emailText
    );

    // If email not send storing mail in drafts
    if (!isEmailSent) {
      await Mail.create({
        user: req.user._id,
        toEmail,
        emailSubject,
        emailText,
        isMailSent: false,
      });
      customError(res, 401, "Email not sent..., saved in drafts");
    }

    // Mail sent storing in database as sent
    const mail = await Mail.create({
      user: req.user._id,
      toEmail,
      emailSubject,
      emailText,
      isMailSent: true,
    });

    // Sending response
    res.json({
      status: "success",
      message: "email sent successfully",
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};
