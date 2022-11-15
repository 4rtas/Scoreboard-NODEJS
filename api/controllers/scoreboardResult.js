const scoreboardResultSchema = require("../models/scoreboardResultModel");
const scoreboardSchema = require("../models/scoreboardResultModel");

const scoreboardResult = [];

module.exports.INSERT_scoreboardResult = function (req, res) {
  const scoreboardResult = new scoreboardResultSchema({
    scoreboardResult: req.body.scoreboard_id,
    title: req.body.title,
    points: req.body.points,
    passTime: req.body.passTime,
  });

  scoreboardResult.save().then((result) => {
    console.log(result._id.toString());

    scoreboardResultSchema
      .updateOne({ _id: result._id }, { id: result._id })
      .exec();

    scoreboardSchema
      .updateOne(
        { _id: req.body.scoreboard_id },
        { $push: { result_Ids: result._id.toString() } }
      )
      .exec();

    return res.status(200).json({
      statusMessage: "scoreboard result was created successfully",
      result: result,
    });
  });
};

module.exports.GET_scoreboardResults = function (req, res) {
  scoreboardResultSchema
    .find()
    .sort("scoreboardResult")
    .then((results) => {
      return res.status(200).json({ scoreboardResult: results });
    });
};

module.exports.GET_scoreboardResultsById = function (req, res) {
  scoreboardResultSchema
    .findOne({ _id: req.params.scoreboard_id })
    .then((results) => {
      return res.status(200).json({ results: results });
    });
};

module.exports.EDIT_scoreboardResultTitle = (req, res) => {
  scoreboardResultSchema
    .updateOne({ _id: req.params.title }, { title: req.body.editedTitle })
    .then((result) => {
      return res.status(200).json({
        statusMessage: "Scoreboard result title edited successfully",
        editedTitle: result,
      });
    });
};
