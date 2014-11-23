function Match(idIn, teamIn, datePlayedIn, opponentIn, homeIn) {
	this.id = idIn;
	this.team = teamIn;
	this.date = datePlayedIn;
	this.opponent = opponentIn;
	this.home = homeIn;
	this.periods = [];
	this.matchplayers = [];
	
	this.teamScore = 0;
	this.opponentScore = 0;
}

function Period(idIn, matchIn, numberIn, lengthIn) {
	this.id = idIn;
	this.number = numberIn;
	this.length = lengthIn;
	this.match = matchIn;
	this.goals = [];
}

function Goal(idIn, minuteIn, scoreTeamIn, scoreOppIn, isForTeamIn, playerIn, periodIn) {
	this.id = idIn;
	//goal is always counted in the next minute as they start from 0. zero based counting
	this.minute = minuteIn;
	//this is the score for easy use: 0 - 1
	this.scoreMyTeam = scoreTeamIn;
	this.scoreOpponent = scoreOppIn;
	//indicator if the team you are following has scored. This is for later dev to calculate
	this.isForMyTeam = isForTeamIn;
	//who scored the goal
	this.player = playerIn;
	this.period = periodIn;
}

function MatchPlayer(idIn, matchIn, playerIn) {
	this.id = idIn;
	this.match = matchIn;
	this.player = playerIn;
}



function Teams() {
	this.teams = [];
	
	this.addTeam = function (team) {
		if ( $.inArray(team, teams) == -1) {
			this.teams.push( team );
		}
	}
}

function SavedData() {
	this.dataVersion= variables.dataVersion;
	this.softwareVersion= variables.softwareVersion;
	this.teams = []; //list of TeamItem
}
	
function addMatch(savedData, match) {
	var found = false;
	$.each( savedData.teams, function( i, val ) {
		if( savedData.teams[i].team == match.team ) {
			savedData.teams[i].matches.push( match );
			found = true;
		}
	});
	
	if( !found ) {
		//create TeamItem
		var teamItem = new TeamItem(match);
		savedData.teams.push( teamItem );
	}
}

function Team(idIn, teamName) {
	this.id = idIn;
	this.name = teamName;
	this.matches = [];
}

function Player(idIn, firstnameIn, lastnameIn) {
	this.id = idIn;
	this.firstname = firstnameIn;
	this.lastname = lastnameIn;
	//this does not map on the database but is required for the checkboxes
	this.checked;
	this.nrOfMatches;
	this.nrOfGoals;
}

function Setting(idIn, nameIn, valueIn) {
	this.id = idIn;
	this.name = nameIn;
	this.value = valueIn;
}