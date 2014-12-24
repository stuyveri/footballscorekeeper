var variables = {
	savedData : null,
	databaseVersion : "1.3",
	TWITTER : "TWITTER",
	LANGUAGE_PREF : "LANGUAGE_PREF",
	PLAYER_TYPE : 0,
	OPPONENT_TYPE : 1,
	UNDEFINED_TYPE : 2,
	CARD_YELLOW : null,
	CARD_RED : null,
	CARD_YELLOW_TO_RED : null, //is for indicating red after 2nd yellow
	//1.1: 
	//		Id added
	//		myTeamPlayers
	//		goal.player
	//1.2
	//		Settings added to database
	//1.3
	//		Replacements added to database
	//		Cards added to database
	softwareVersion : "0.2.0.0",
	initDone : false,
	fileName : "FootballScoreKeeper",
	isInPause : false,
	maxMatchId : 0,
	maxPeriodId : 0,
	maxGoalId : 0,
	maxMatchPlayerId : 0,
	playerNrOfMatches : 0,
	playerNrOfGoals : 0,
	twitterSetting : {id : null, value : false},
	preferredLangSetting : {id : null, value : false},
	teamNrOfGoalsScored : 0,
	teamNrOfGoalsAgainst : 0,
	teamTopScorer : null,
	teamNrOfMatches : 0
};
var MatchStatusEnum = {
  NOT_STARTED: {},
  PERIOD_ONGOING: {},
  PERIOD_ENDED: {},
  MATCH_ENDED: {},
  MATCH_STOPPED: {}
};