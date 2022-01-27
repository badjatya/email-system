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
app.use("/api/v1/auth", require("./app/routes/auth"));
app.use("/api/v1/user", require("./app/routes/user"));

// Exporting app
module.exports = app;
