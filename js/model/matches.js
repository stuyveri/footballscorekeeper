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
	this.goals = [];
	
	this.pushGoal = function (goal) {
		this.goals.push( goal );
	}
}

function Goal(minuteIn, scoreTeamIn, scoreOppIn, isForTeamIn) {
	//goal is always counted in the next minute as they start from 0. zero based counting
	this.minute = minuteIn + 1;
	//this is the score for easy use: 0 - 1
	this.score = scoreTeamIn + ' - ' + scoreOppIn;
	//indicator if the team you are following has scored. This is for later dev to calculate
	this.isForMyTeam = isForTeamIn;
	
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
	
	this.addMatch = function (match) {
		var found = false;
		$.each( this.teams, function( i, val ) {
			if( this.teams[i].team == match.team ) {
				this.teams[i].matches.push( match );
				found = true;
			}
		});
		
		if( !found ) {
			//create TeamItem
			var teamItem = new TeamItem(match);
			this.teams.push( teamItem );
		}
	}
}

function TeamItem(match) {
	this.team = match.team;
	this.matches = [match];
}