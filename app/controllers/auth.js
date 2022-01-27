// Packages

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
