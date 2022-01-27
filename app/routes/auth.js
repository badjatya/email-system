// Package
const router = require("express").Router();

// Importing controllers
const { signup } = require("../controllers/auth");

// Routes
router.get("/signup", signup);

// Exporting router
module.exports = router;
