// Models
const User = require("../models/user");

// Utils
const customError = require("../utils/customError");

exports.signup = async (req, res) => {
  try {
    // Destructuring body
    const { name, email, password } = req.body;

    // Checking all the fields are present
    if (!name || !email || !password) {
      return customError(res, 400, "Name, email and password are required");
    }

    // Checking is user already exist
    const isUserExist = await User.findOne({ email });
    if (isUserExist !== null) {
      return customError(res, 401, "User already exists, please login");
    }

    // Creating new user
    const user = await User.create({ name, email, password });

    // Generating auth token
    const token = await user.getJwtToken();

    // Sending cookie
    res.cookie("token", token, {
      expire: new Date() + 99999,
      httpOnly: true,
    });

    // Sending response
    res.json({
      status: "success",
      token,
      user,
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};

exports.signin = async (req, res) => {
  try {
    // Destructuring body
    const { email, password } = req.body;

    // Checking all the fields are present
    if (!email || !password) {
      return customError(
        res,
        400,
        "Email and password are required for signin"
      );
    }

    // Checking is user exist with this email
    const user = await User.findOne({ email });
    if (!user) {
      return customError(res, 401, "Either email or password is invalid");
    }

    // Checking is user entered password is valid password
    const isValidUser = await user.isValidPassword(password);
    if (!isValidUser) {
      return customError(res, 401, "Either email or password is invalid");
    }

    // Generating auth token for login
    const token = await user.getJwtToken();

    // Sending cookie
    res.cookie("token", token, {
      expire: new Date() + 99999,
      httpOnly: true,
    });

    // Sending response
    res.json({
      status: "success",
      token,
      user,
    });
  } catch (error) {
    customError(res, 500, error.message, "error");
  }
};
