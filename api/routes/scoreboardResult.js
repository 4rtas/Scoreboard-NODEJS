const express = require("express");
const router = express.Router();
const {
  GET_scoreboardResults,
  GET_scoreboardResultsById,
  INSERT_scoreboardResult,
  EDIT_scoreboardResultTitle,
} = require("../controllers/scoreboardResult");

router.post("/insertScoreboardResult", INSERT_scoreboardResult); //done

router.get("/getScoreboardResults", GET_scoreboardResults); //done

router.get("/getResultsByScoreboardId", GET_scoreboardResultsById); //done

router.put("/editScoreboardResultTitle", EDIT_scoreboardResultTitle); //done

module.exports = router;
