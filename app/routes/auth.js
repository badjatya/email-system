// Package
const router = require("express").Router();

// Importing controllers
const { signup, signin } = require("../controllers/auth");

// Routes
router.post("/signup", signup);
router.post("/signin", signin);

// Exporting router
module.exports = router;
