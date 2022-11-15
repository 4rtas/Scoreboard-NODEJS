const express = require("express");
const router = express.Router();
const {
  CREATE_scoreboard,
  GET_AllScoreboards,
  GET_scoreboardById,
  EDIT_scoreboardDirection,
  EDIT_scoreboardName,
} = require("../controllers/scoreboard");

router.post("/createScoreboard", CREATE_scoreboard); //done

router.put("/editScoreboardName/:id", EDIT_scoreboardName); //done

router.put("/editScoreboardDirection/:name", EDIT_scoreboardDirection); //done

router.get("/getScoreboardById", GET_scoreboardById); //done

router.get("/getAllScoreboards", GET_AllScoreboards); //done

module.exports = router;
