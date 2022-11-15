const express = require("express");
const bodyParser = require("body-parser");
const scoreboardResultRoutes = require("./api/routes/scoreboardResult");
const scoreboardRoutes = require("./api/routes/scoreboard");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  .then(console.log("connected"))
  .catch((err) => {
    console.log("shit, it doesn't work");
    console.log(err);
  });

app.use(scoreboardRoutes);
app.use(scoreboardResultRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.listen(3000);
