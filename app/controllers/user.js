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

// user getting all sent mails
exports.getSignedInUserSentMails = async (req, res) => {
  try {
    // Getting all sent mails
    const sentMails = await Mail.find({
      user: req.user._id,
      isMailSent: true,
    })
      .select(["-__v", "-updatedAt", "-user", "-isMailSent", "-emailText"])
      .sort("-createdAt");

    // Sending response
    res.json({
      status: "success",
      results: sentMails.length,
      mails: sentMails,
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};

// user getting details of sent mail
exports.getSignedInUserSentMailDetails = async (req, res) => {
  try {
    // Getting sent mail
    const sentMail = await Mail.findOne({
      user: req.user._id,
      isMailSent: true,
      _id: req.params.id,
    }).populate("user", "name email");

    // If mail not found
    if (!sentMail) {
      return customError(res, 404, "Sent Mail not found");
    }

    // Sending response
    res.json({
      status: "success",
      sentMail,
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};

// user updating sent mail to favorite or removing
exports.signedInUserUpdatingFavoriteSentMail = async (req, res) => {
  try {
    // Getting sent mail
    const sentMail = await Mail.findOne({
      user: req.user._id,
      isMailSent: true,
      _id: req.params.id,
    });

    // If mail not found
    if (!sentMail) {
      return customError(res, 404, "Sent Mail not found");
    }

    // Toggling fav
    sentMail.favorite = !sentMail.favorite;
    await sentMail.save();

    // Sending response
    res.json({
      status: "success",
      message: "Updated",
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};

// user getting all draft mails
exports.getSignedInUserDraftMails = async (req, res) => {
  try {
    // Getting all draft mails
    const draftMails = await Mail.find({
      user: req.user._id,
      isMailSent: false,
    })
      .select(["-__v", "-updatedAt", "-user", "-isMailSent", "-emailText"])
      .sort("-createdAt");

    // Sending response
    res.json({
      status: "success",
      results: draftMails.length,
      mails: draftMails,
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};

// user getting details of draft mail
exports.getSignedInUserDraftMailDetails = async (req, res) => {
  try {
    // Getting draft mail
    const draftMail = await Mail.findOne({
      user: req.user._id,
      isMailSent: false,
      _id: req.params.id,
    }).populate("user", "name email");

    // If mail not found
    if (!draftMail) {
      return customError(res, 404, "Draft Mail not found");
    }

    // Sending response
    res.json({
      status: "success",
      draftMail,
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};

// user updating draft mail to favorite or removing
exports.signedInUserUpdatingFavoriteDraftMail = async (req, res) => {
  try {
    // Getting draft mail
    const draftMail = await Mail.findOne({
      user: req.user._id,
      isMailSent: false,
      _id: req.params.id,
    }).populate("user", "name email");

    // If mail not found
    if (!draftMail) {
      return customError(res, 404, "Draft Mail not found");
    }

    // Toggling fav
    draftMail.favorite = !draftMail.favorite;
    await draftMail.save();

    // Sending response
    res.json({
      status: "success",
      message: "Updated",
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};
