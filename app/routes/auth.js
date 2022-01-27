// Package
const router = require("express").Router();

// Importing controllers
const { signup, signin, signout } = require("../controllers/auth");

// Importing Middlewares
const { isLoggedIn } = require("../middlewares/auth");

// Routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", isLoggedIn, signout);

// Exporting router
module.exports = router;
