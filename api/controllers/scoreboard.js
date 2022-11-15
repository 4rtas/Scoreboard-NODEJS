const scoreboardSchema = require("../models/scoreboardModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_scoreboard = function (req, res) {
  const scoreboard = new scoreboardSchema({
    name: req.body.name,
    dateCreated: new Date(),
    result_Ids: [],
    scoreDirection: req.body.scoreDirection,
  });

  scoreboard.save().then((result) => {
    return res
      .status(200)
      .json({ response: "Scoreboard was created successfully" });
  });
};

module.exports.EDIT_scoreboardName = (req, res) => {
  scoreboardSchema
    .updateOne({ _id: req.params.id }, { name: req.body.editedName })
    .then((result) => {
      return res.status(200).json({
        statusMessage: "Scoreboard name edited successfully",
        name: result,
      });
    });
};

module.exports.EDIT_scoreboardDirection = (req, res) => {
  scoreboardSchema
    .updateOne(
      { _id: req.params.result_Ids },
      { scoreDirection: req.body.editedScoreDirection }
    )
    .then((result) => {
      return res.status(200).json({
        statusMessage: "Scoreboard direction edited successfully",
        editedScoreDirection: result,
      });
    });
};

module.exports.GET_AllScoreboards = function (req, res) {
  scoreboardSchema
    .find()
    .sort("scoreboard")
    .then((results) => {
      return res.status(200).json({ results: results });
    });
};

module.exports.GET_scoreboardById = async function (req, res) {
  const data = await scoreboardSchema
    .aggregate([
      {
        $lookup: {
          from: "scoreboard",
          localField: "result_ids",
          foreignField: "id",
          as: "user_tasks",
        },
      },
      { $match: { _id: ObjectId(req.params.result_ids) } },
    ])
    .exec();

  console.log(data);

  return res.status(200).json({ user: data });
};
