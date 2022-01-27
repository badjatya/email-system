// Packages
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");

// Schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
      trim: true,
      maxlength: [40, "Name must be less than 40 characters"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "A user must have an email"],
      unique: [true, "A user must have a unique email"],
      maxlength: [50, "Email must be less than 50 characters"],
      validate: validator.isEmail,
    },
    password: {
      type: String,
      trim: true,
      minlength: [7, "A password must contain at least 7 characters"],
    },
  },
  {
    timestamps: true,
  }
);

// Hashing user entered password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Getting jwt login token
userSchema.methods.getJwtToken = async function (password) {
  return jwt.sign({ id: this._id, password }, process.env.JWT_SECRET_KEY);
};

// Checking user entered password is valid password
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Exporting Model
module.exports = mongoose.model("User", userSchema);
