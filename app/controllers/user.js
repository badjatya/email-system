// Models
const User = require("../models/user");

// Utils
const customError = require("../utils/customError");

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
