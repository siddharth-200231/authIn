const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./routes/authRoute");
require("dotenv").config();
require("./models/db");

const app = express();

app.use(bodyParser.json()); // For JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // For x-www-form-urlencoded requests
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

// Authentication routes
app.use("/auth", authRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
