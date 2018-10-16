const express = require('express');
const app = express();
const movieRouter = require("./routes/movies");
const songRouter = require("./routes/songs");

// app.use(express.static('client'));
app.use(express.json())

app.use("/movies", movieRouter);
app.use("/songs", songRouter);

module.exports = app
