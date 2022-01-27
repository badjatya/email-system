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
  signedInUserUpdatingFavoriteSentMail,
  signedInUserUpdatingFavoriteDraftMail,
} = require("../controllers/user");

// Importing Middlewares
const { isLoggedIn } = require("../middlewares/auth");

// Routes
router.get("/profile", isLoggedIn, getSignedInUserProfile);

// Sending mail
router.post("/mail/send", isLoggedIn, signedInUserSendsAMail);

// Getting sent mail
router.get("/mail/sent", isLoggedIn, getSignedInUserSentMails);
router
  .route("/mail/sent/:id")
  .get(isLoggedIn, getSignedInUserSentMailDetails)
  .patch(isLoggedIn, signedInUserUpdatingFavoriteSentMail);

// Getting draft mail
router.get("/mail/draft", isLoggedIn, getSignedInUserDraftMails);
router
  .route("/mail/draft/:id")
  .get(isLoggedIn, getSignedInUserDraftMailDetails)
  .patch(isLoggedIn, signedInUserUpdatingFavoriteDraftMail);

// Exporting router
module.exports = router;
