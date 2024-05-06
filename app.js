const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const mainRouter = require("./routes/index");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyparser.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/api/v1", mainRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is runnig on port ${port}`);
});
