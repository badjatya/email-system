// Package
const router = require("express").Router();

// Importing controllers
const { getSignedInUserProfile } = require("../controllers/user");

// Importing Middlewares
const { isLoggedIn } = require("../middlewares/auth");

// Routes
router.get("/profile", isLoggedIn, getSignedInUserProfile);

// Exporting router
module.exports = router;
