// Package
const router = require("express").Router();

// Importing controllers
const {
  getSignedInUserProfile,
  signedInUserSendsAMail,
  getSignedInUserSentMails,
  getSignedInUserSentMailDetails,
  getSignedInUserDraftMails,
  getSignedInUserDraftMailDetails,
} = require("../controllers/user");

// Importing Middlewares
const { isLoggedIn } = require("../middlewares/auth");

// Routes
router.get("/profile", isLoggedIn, getSignedInUserProfile);

// Sending mail
router.post("/mail/send", isLoggedIn, signedInUserSendsAMail);

// Getting sent mail
router.get("/mail/sent", isLoggedIn, getSignedInUserSentMails);
router.get("/mail/sent/:id", isLoggedIn, getSignedInUserSentMailDetails);

// Getting draft mail
router.get("/mail/draft", isLoggedIn, getSignedInUserDraftMails);
router.get("/mail/draft/:id", isLoggedIn, getSignedInUserDraftMailDetails);

// Exporting router
module.exports = router;
