document.addEventListener("deviceready", onDeviceReadyForDatabase, false);

function onDeviceReadyForDatabase() {
	console.log("onDeviceReadyForDatabase called.");

	//get the database without version to get the latest one
	variables.db = window.openDatabase("FootballScoreKeeper", "", "Football Score Keeper", 200000);
	console.log("current db version: " + variables.db.version);

	if( variables.db.version == "" ) {
		console.log("updating database from/to: " + variables.db.version + "/1.0");
		variables.db.changeVersion(variables.db.version, "1.0");
		//If any other changes are required or update to the structure, do them here after the DB version check

		//create all tables (if not exist)
		variables.db.transaction(function(tx) {
				tx.executeSql('CREATE TABLE IF NOT EXISTS Team (Id INTEGER PRIMARY KEY ASC, Name TEXT UNIQUE)');
				console.log("Team done.");
				tx.executeSql('CREATE TABLE IF NOT EXISTS Player (Id INTEGER PRIMARY KEY ASC, FirstName TEXT, LastName TEXT, Type INTEGER DEFAULT 0)');
				console.log("Player done.");
				tx.executeSql('CREATE TABLE IF NOT EXISTS Match (Id INT PRIMARY KEY ASC, Opponent TEXT, MatchDate INTEGER, IsHomeMatch INTEGER, TeamScore INTEGER, OpponentScore INTEGER, Team INTEGER, FOREIGN KEY(Team) REFERENCES Team(Id))');
				console.log("Match done.");
				tx.executeSql('CREATE TABLE IF NOT EXISTS Period (Id INT PRIMARY KEY ASC, Number INTEGER, Length INTEGER, Match INTEGER, FOREIGN KEY(Match) REFERENCES Match(Id))');
				console.log("Period done.");
				tx.executeSql('CREATE TABLE IF NOT EXISTS Goal (Id INT PRIMARY KEY ASC, Minute INTEGER, ScoreMyTeam INTEGER, ScoreOpponent INTEGER, IsForMyTeam INTEGER, Period INTEGER, Player INTEGER, FOREIGN KEY(Period) REFERENCES Period(Id), FOREIGN KEY(Player) REFERENCES Player(Id))');
				console.log("Goal done.");
				tx.executeSql('CREATE TABLE IF NOT EXISTS MatchPlayer (Id INT PRIMARY KEY ASC, Match INTEGER, Player INTEGER, FOREIGN KEY(Match) REFERENCES Match(Id), FOREIGN KEY(Player) REFERENCES Player(Id))');
				console.log("MatchPlayer done.");
				//a player can exist to multiple teams. For the youth, this can be A-team/B-team. for the bigger ones, this can the 1st-team, 2nd-team
				tx.executeSql('CREATE TABLE IF NOT EXISTS PlayerTeam (Id INTEGER PRIMARY KEY ASC, Team INTEGER, Player INTEGER, FOREIGN KEY(Team) REFERENCES Team(Id), FOREIGN KEY(Player) REFERENCES Player(Id))');
				console.log("PlayerTeam done.");

				//empty player for goals of opponent team
				tx.executeSql('INSERT INTO Player(FirstName, LastName, Type) VALUES ("my", "opponent", 1)'); 
				tx.executeSql('INSERT INTO Player(FirstName, LastName, Type) VALUES ("undefined", "undefined", 2)'); 
			}, 
			errorCB, 
			successCB
		);
	} else {
		successCB();
	}

	window.location = "#/";
}

function errorCB(err) {
    console.log("Error processing SQL: "+ angular.toJson(err) );
}

function successCB() {
    console.log("SQL success!");
	//Check if on latest version
	if( variables.db.version != variables.databaseVersion ) {
		console.log("updating database from/to: " + variables.db.version + "/1.2");
		variables.db.changeVersion(variables.db.version, "1.2");

		variables.db.transaction(function(tx) {
				tx.executeSql('CREATE TABLE IF NOT EXISTS Setting (Id INTEGER PRIMARY KEY ASC, Name TEXT UNIQUE, Value TEXT)');
				//empty player for goals of opponent team
				tx.executeSql('INSERT INTO Setting(Name, Value) VALUES (' + variables.TWITTER + ', "0")'); 
				tx.executeSql('INSERT INTO Setting(Name, Value) VALUES (' + variables.LANGUAGE_PREF + ', "en")'); 
				console.log("Settings done.");
			}, 
			errorCB, 
			successCB
		);
	}
}

function booleanToSql(val) {

	if( val ) {
		return 1;
	} else {
		return 0;
	}
}

function SqlToBoolean(val) {

	if( val > 0 ) {
		return true;
	} else {
		return false;
	}
}