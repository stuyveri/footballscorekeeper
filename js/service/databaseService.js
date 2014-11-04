document.addEventListener("deviceready", onDeviceReadyForDatabase, false);

function onDeviceReadyForDatabase() {
	console.log("onDeviceReadyForDatabase called.");

	variables.db = window.openDatabase("FootballScoreKeeper", "1.0", "Football Score Keeper", 200000);
	//create all tables (if not exist)
	variables.db.transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS Team (Id INTEGER PRIMARY KEY ASC, Name TEXT)');
			console.log("Team done.");
			tx.executeSql('CREATE TABLE IF NOT EXISTS Player (Id INTEGER PRIMARY KEY ASC, Name TEXT, Team INTEGER, FOREIGN KEY(Team) REFERENCES Team(Id))');
			console.log("Player done.");
			tx.executeSql('CREATE TABLE IF NOT EXISTS Match (Id INTEGER PRIMARY KEY ASC, Opponent TEXT, Date INTEGER, IsHomeMatch INTEGER, TeamScore INTEGER, OpponentScore INTEGER, Team INTEGER, FOREIGN KEY(Team) REFERENCES Team(Id))');
			console.log("Match done.");
			tx.executeSql('CREATE TABLE IF NOT EXISTS Period (Id INTEGER PRIMARY KEY ASC, Number INTEGER, Length INTEGER, Match INTEGER, FOREIGN KEY(Match) REFERENCES Match(Id))');
			console.log("Period done.");
			tx.executeSql('CREATE TABLE IF NOT EXISTS Goal (Id INTEGER PRIMARY KEY ASC, Minute INTEGER, ScoreMyTeam INTEGER, ScoreOpponent INTEGER, IsForMyTeam INTEGER, Period INTEGER, Player INTEGER, FOREIGN KEY(Period) REFERENCES Period(Id), FOREIGN KEY(Player) REFERENCES Player(Id))');
			console.log("Goal done.");
			tx.executeSql('CREATE TABLE IF NOT EXISTS MatchPlayer (Id INTEGER PRIMARY KEY ASC, Match INTEGER, Player INTEGER, FOREIGN KEY(Match) REFERENCES Match(Id), FOREIGN KEY(Player) REFERENCES Player(Id))');
			console.log("MatchPlayer done.");
		}, 
		errorCB, 
		successCB
	);
}

function errorCB(err) {
    console.log("Error processing SQL: "+err.code);
}

function successCB() {
    console.log("SQL success!");
}

function databaseService() {

	this.getAllTeamMatches = function () {

	};
}