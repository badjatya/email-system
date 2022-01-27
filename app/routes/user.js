// Package
const router = require("express").Router();

// Importing controllers
const {
  getSignedInUserProfile,
  signedInUserSendsAMail,
} = require("../controllers/user");

// Importing Middlewares
const { isLoggedIn } = require("../middlewares/auth");

// Routes
router.get("/profile", isLoggedIn, getSignedInUserProfile);
router.post("/mail/send", isLoggedIn, signedInUserSendsAMail);

// Exporting router
module.exports = router;
