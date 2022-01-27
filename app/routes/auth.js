// Package
const router = require("express").Router();

// Importing controllers
const { signup } = require("../controllers/auth");

// Routes
router.post("/signup", signup);

// Exporting router
module.exports = router;
