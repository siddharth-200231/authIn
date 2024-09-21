const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter=require("./routes/authRoute")
require("dotenv").config();
require("./models/db");
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/auth",authRouter)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:8080/`);
});
