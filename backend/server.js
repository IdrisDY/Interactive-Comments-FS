const express = require("express");
const app = express();

const mongoose = require("mongoose");
const routes = require("./routes/comments");

require('dotenv').config()

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => { 
    app.listen("4000", (req, res) => {
      console.log("Started listening thank you");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/comments",routes);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to the rhytm" });
});
