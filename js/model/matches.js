function Match(teamIn, datePlayedIn, opponentIn, homeIn) {
	this.team = teamIn;
	this.date = datePlayedIn;
	this.opponent = opponentIn;
	this.home = homeIn;
	this.periods = [];
	
	this.teamScore = 0;
	this.opponentScore = 0;
	
	this.pushPeriod = function (period) {
		this.periods.push( period );
	}
}

function Period(numberIn, lengthIn) {
	this.number = numberIn;
	this.length = lengthIn;
}

function Teams() {
	this.teams = [];
	
	this.addTeam = function (team) {
		if ( $.inArray(team, teams) == -1) {
			this.teams.push( team );
		}
	}
}
var teams = new Teams();

function SavedData() {
	this.matches = [];
	this.teams = [];
}