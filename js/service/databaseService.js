//document.addEventListener("deviceready", onDeviceReadyForDatabase, false);

function onDeviceReadyForDatabase() {
	console.log("onDeviceReadyForDatabase called.");
	var startEmpty = false;

	//get the database without version to get the latest one
	variables.db = window.openDatabase("FootballScoreKeeper", "", "Football Score Keeper", 200000);
	console.log("current db version: " + variables.db.version);

	if( variables.db.version < variables.databaseVersion ) {
		//If any other changes are required or update to the structure, do them here after the DB version check

		//create all tables (if not exist)
		variables.db.transaction(function(tx) {

				//Check if this is the initial version for the user. We initiate the DB the first time right!
				if( variables.db.version == "" ) {
					startEmpty = true;

					console.log("updating database from/to: " + variables.db.version + "/" + variables.databaseVersion);
					variables.db.changeVersion(variables.db.version, variables.databaseVersion);

					tx.executeSql('CREATE TABLE IF NOT EXISTS Team (Id INTEGER PRIMARY KEY ASC, Name TEXT UNIQUE)');
					console.log("Team done.");
					tx.executeSql('CREATE TABLE IF NOT EXISTS Player (Id INTEGER PRIMARY KEY ASC, FirstName TEXT, LastName TEXT, Type INTEGER DEFAULT 0)');
					console.log("Player done.");
					tx.executeSql('CREATE TABLE IF NOT EXISTS Match (Id INTEGER PRIMARY KEY ASC, Opponent TEXT, MatchDate INTEGER, IsHomeMatch INTEGER, TeamScore INTEGER, OpponentScore INTEGER, Team INTEGER, FOREIGN KEY(Team) REFERENCES Team(Id))');
					console.log("Match done.");
					//Match is a keyword => quote it in the SQL
					tx.executeSql('CREATE TABLE IF NOT EXISTS Period (Id INTEGER PRIMARY KEY ASC, Number INTEGER, Length INTEGER, Match INTEGER, FOREIGN KEY(Match) REFERENCES "Match"(Id))');
					console.log("Period done.");
					tx.executeSql('CREATE TABLE IF NOT EXISTS Goal (Id INTEGER PRIMARY KEY ASC, Minute INTEGER, ScoreMyTeam INTEGER, ScoreOpponent INTEGER, IsForMyTeam INTEGER, Period INTEGER, Player INTEGER, FOREIGN KEY(Period) REFERENCES Period(Id), FOREIGN KEY(Player) REFERENCES Player(Id))');
					console.log("Goal done.");
					tx.executeSql('CREATE TABLE IF NOT EXISTS MatchPlayer (Id INTEGER PRIMARY KEY ASC, Match INTEGER, Player INTEGER, IsBasePlayer INTEGER DEFAULT 0, FOREIGN KEY(Match) REFERENCES "Match"(Id), FOREIGN KEY(Player) REFERENCES Player(Id))');
					console.log("MatchPlayer done.");
					//a player can exist to multiple teams. For the youth, this can be A-team/B-team. for the bigger ones, this can the 1st-team, 2nd-team
					tx.executeSql('CREATE TABLE IF NOT EXISTS PlayerTeam (Id INTEGER PRIMARY KEY ASC, Team INTEGER, Player INTEGER, FOREIGN KEY(Team) REFERENCES Team(Id), FOREIGN KEY(Player) REFERENCES Player(Id))');
					console.log("PlayerTeam done.");
					console.log("Add Table Replacement ....");
					tx.executeSql( getReplacement() );
					console.log("Add Table Replacement done.");

					doSettings(tx);
					console.log("Settings done.");

					doCard(tx);
					console.log("Card done.");

					//empty player for goals of opponent team
					tx.executeSql('INSERT INTO Player(FirstName, LastName, Type) VALUES ("my", "opponent", 1)'); 
					tx.executeSql('INSERT INTO Player(FirstName, LastName, Type) VALUES ("undefined", "undefined", 2)'); 
					console.log("Player inserts done.");
				}

				//If the user had already a version => incremental update
				//Update from lower version to 1.2
				if( variables.db.version < "1.2" && !startEmpty ) {
					console.log("updating database from/to: " + variables.db.version + "/1.2");
					variables.db.changeVersion(variables.db.version, "1.2");
					console.log("updating database version done");

					doSettings(tx);
				}

				//Update from lower version to 1.3
				if( variables.db.version < "1.3" && !startEmpty ) {
					console.log("updating database from/to: " + variables.db.version + "/1.3");
					variables.db.changeVersion(variables.db.version, "1.3");
					console.log("updating database version done");

					console.log("MatchPlayer ADD COLUMN ....");
					tx.executeSql('ALTER TABLE MatchPlayer ADD COLUMN IsBasePlayer INTEGER DEFAULT 0');
					console.log("MatchPlayer ADD COLUMN done.");

					console.log("Add Table Replacement ....");
					tx.executeSql( getReplacement() );
					console.log("Add Table Replacement done.");

					doCard(tx);
					console.log("Card done.");
				}
			}, 
			errorCB, 
			successCB
		);
	}
}

function getReplacement() {
	return 'CREATE TABLE IF NOT EXISTS Replacement (Id INTEGER PRIMARY KEY ASC, MatchPlayerIn INTEGER, MatchPlayerOut INTEGER, Match INTEGER, Minute INTEGER, FOREIGN KEY(Match) REFERENCES "Match"(Id), FOREIGN KEY(MatchPlayerIn) REFERENCES MatchPlayer(Id), FOREIGN KEY(MatchPlayerOut) REFERENCES MatchPlayer(Id))';
}

function doCard(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS CardType (Id INTEGER PRIMARY KEY ASC, Name TEXT, Description TEXT, ImageLink TEXT)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS Card (Id INTEGER PRIMARY KEY ASC, MatchPlayer INTEGER, CardType INTEGER, Match INTEGER, Minute INTEGER, FOREIGN KEY(Match) REFERENCES "Match"(Id), FOREIGN KEY(MatchPlayer) REFERENCES MatchPlayer(Id), FOREIGN KEY(CardType) REFERENCES CardType(Id))');

	tx.executeSql('INSERT INTO CardType(Id, Name, Description, ImageLink) VALUES (1, "CARD_YELLOW", "NA", "img/YellowCard.png")'); 
	tx.executeSql('INSERT INTO CardType(Id, Name, Description, ImageLink) VALUES (2, "CARD_RED", "NA", "img/RedCard.png")'); 
	tx.executeSql('INSERT INTO CardType(Id, Name, Description, ImageLink) VALUES (3, "CARD_YELLOW_TO_RED", "NA", "img/YellowRedCard.png")'); 
}

function doSettings(tx) {
	console.log("Starting Setting.");
	tx.executeSql('CREATE TABLE IF NOT EXISTS Setting (Id INTEGER PRIMARY KEY ASC, Name TEXT UNIQUE, Value TEXT)');
	console.log("Setting done.");
	//empty player for goals of opponent team
	tx.executeSql('INSERT INTO Setting(Name, Value) VALUES ("' + variables.TWITTER + '", "0")'); 
	tx.executeSql('INSERT INTO Setting(Name, Value) VALUES ("' + variables.LANGUAGE_PREF + '", "en")'); 
	console.log("Settings Insert done."); 
}


function errorCB(err) {
    console.log("Error processing SQL: "+ angular.toJson(err) );
}

function successCB() {
    console.log("SQL success!");
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