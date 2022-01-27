// Package
const express = require("express");
const cors = require("cors");

// Initializing app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", require("./app/routes/auth"));

// Exporting app
module.exports = app;
