// Package
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Initializing app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api/v1", require("./app/routes/auth"));

// Exporting app
module.exports = app;
