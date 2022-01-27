// Packages
const mongoose = require("mongoose");
const validator = require("validator");

// Schema
const mailSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "A mail must have a sender"],
      ref: "User",
    },
    toEmail: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "A mail must have a receiver"],
      validate: validator.isEmail,
    },
    emailSubject: {
      type: String,
      trim: true,
      required: [true, "A email must contain subject"],
    },
    emailText: {
      type: String,
      trim: true,
      required: [true, "A email must contain message"],
    },
    isMailSent: {
      type: Boolean,
      default: false,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
module.exports = mongoose.model("Mail", mailSchema);
