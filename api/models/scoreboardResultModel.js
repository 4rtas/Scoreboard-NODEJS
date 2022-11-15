const mongoose = require("mongoose");

const scoreboardResultSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  points: { type: String, required: true },
  scoreboard_id: { type: Array, required: false },
  passTime: { type: String, required: true },
});

module.exports = mongoose.model("Scoreboard Result", scoreboardResultSchema);
