// Configuring dotenv
require("dotenv").config();

// Importing app
const app = require("./app");

// Connecting to DB
require("./app/db/dbConnect").dbConnect();

// Creating express server
app.listen(process.env.PORT, () =>
  console.log(`Server is running at ${process.env.PORT}`)
);
