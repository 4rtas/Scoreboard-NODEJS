const mongoose = require("mongoose");

const scoreboardSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dateCreated: { type: String },
  result_ids: { type: Array },
  scoreDirection: { type: String, enum: ["ASC", "DESC"] },
});

module.exports = mongoose.model("Scoreboard", scoreboardSchema);
