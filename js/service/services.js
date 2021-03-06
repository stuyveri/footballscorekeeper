angular.module('SoccerKeeperApp.services', [])

/*                                                                                                                                                                                                 
TTTTTTTTTTTTTTTTTTTTTTT                                                           SSSSSSSSSSSSSSS                                                                 iiii                                          
T:::::::::::::::::::::T                                                         SS:::::::::::::::S                                                               i::::i                                         
T:::::::::::::::::::::T                                                        S:::::SSSSSS::::::S                                                                iiii                                          
T:::::TT:::::::TT:::::T                                                        S:::::S     SSSSSSS                                                                                                              
TTTTTT  T:::::T  TTTTTTeeeeeeeeeeee    aaaaaaaaaaaaa      mmmmmmm    mmmmmmm   S:::::S                eeeeeeeeeeee    rrrrr   rrrrrrrrrvvvvvvv           vvvvvvviiiiiii     cccccccccccccccc    eeeeeeeeeeee    
        T:::::T      ee::::::::::::ee  a::::::::::::a   mm:::::::m  m:::::::mm S:::::S              ee::::::::::::ee  r::::rrr:::::::::rv:::::v         v:::::v i:::::i   cc:::::::::::::::c  ee::::::::::::ee  
        T:::::T     e::::::eeeee:::::eeaaaaaaaaa:::::a m::::::::::mm::::::::::m S::::SSSS          e::::::eeeee:::::eer:::::::::::::::::rv:::::v       v:::::v   i::::i  c:::::::::::::::::c e::::::eeeee:::::ee
        T:::::T    e::::::e     e:::::e         a::::a m::::::::::::::::::::::m  SS::::::SSSSS    e::::::e     e:::::err::::::rrrrr::::::rv:::::v     v:::::v    i::::i c:::::::cccccc:::::ce::::::e     e:::::e
        T:::::T    e:::::::eeeee::::::e  aaaaaaa:::::a m:::::mmm::::::mmm:::::m    SSS::::::::SS  e:::::::eeeee::::::e r:::::r     r:::::r v:::::v   v:::::v     i::::i c::::::c     ccccccce:::::::eeeee::::::e
        T:::::T    e:::::::::::::::::e aa::::::::::::a m::::m   m::::m   m::::m       SSSSSS::::S e:::::::::::::::::e  r:::::r     rrrrrrr  v:::::v v:::::v      i::::i c:::::c             e:::::::::::::::::e 
        T:::::T    e::::::eeeeeeeeeee a::::aaaa::::::a m::::m   m::::m   m::::m            S:::::Se::::::eeeeeeeeeee   r:::::r               v:::::v:::::v       i::::i c:::::c             e::::::eeeeeeeeeee  
        T:::::T    e:::::::e         a::::a    a:::::a m::::m   m::::m   m::::m            S:::::Se:::::::e            r:::::r                v:::::::::v        i::::i c::::::c     ccccccce:::::::e           
      TT:::::::TT  e::::::::e        a::::a    a:::::a m::::m   m::::m   m::::mSSSSSSS     S:::::Se::::::::e           r:::::r                 v:::::::v        i::::::ic:::::::cccccc:::::ce::::::::e          
      T:::::::::T   e::::::::eeeeeeeea:::::aaaa::::::a m::::m   m::::m   m::::mS::::::SSSSSS:::::S e::::::::eeeeeeee   r:::::r                  v:::::v         i::::::i c:::::::::::::::::c e::::::::eeeeeeee  
      T:::::::::T    ee:::::::::::::e a::::::::::aa:::am::::m   m::::m   m::::mS:::::::::::::::SS   ee:::::::::::::e   r:::::r                   v:::v          i::::::i  cc:::::::::::::::c  ee:::::::::::::e  
      TTTTTTTTTTT      eeeeeeeeeeeeee  aaaaaaaaaa  aaaammmmmm   mmmmmm   mmmmmm SSSSSSSSSSSSSSS       eeeeeeeeeeeeee   rrrrrrr                    vvv           iiiiiiii    cccccccccccccccc    eeeeeeeeeeeeee  
*/

.factory('TeamService', function() {
  	var _teams = [];
  	var _currentTeam = null;

	return {
		currentTeam : _currentTeam,
		teams : _teams,
	    getAllTeams: function(fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT Id, Name FROM Team ORDER BY Name asc', [], doTeams, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    insertTeam: function(team, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('INSERT INTO Team(Name) VALUES ("' + team.name + '")'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    updateTeam: function(team, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('UPDATE Team SET Name =  "' + team.name + '" WHERE Id = "' + team.id + '"'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    deleteTeam: function(team, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('DELETE FROM Team WHERE Id = "' + team.id + '"'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    addPlayerToTeam: function(team, playerId, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('INSERT INTO PlayerTeam(Team, Player) VALUES (' + team.id + ', ' + playerId + ')'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    removePlayerFromTeam: function(team, player, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('DELETE FROM PlayerTeam WHERE Team = "' + team.id + '" and Player = "' + player.id + '"'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getTeamsForPlayer: function(player, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT Team.Id, Team.Name FROM PlayerTeam INNER JOIN Team ON Team.Id = PlayerTeam.Team WHERE Player = "' + player.id + '"', [], doTeams, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getNrOfMatches: function(team, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT count(*) as Cnt FROM Match WHERE Team  = ' + team.id, [], doCountMatches, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getNrOfGoals: function(team, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql(
								" SELECT" +
								"	Count(Goal.Id) AS Cnt" +
								"	, Goal.IsForMyTeam" +
								" FROM Match" +
								"	INNER JOIN Team ON Team.Id = Match.Team" +
								"	LEFT OUTER JOIN Period ON Match.Id = Period.Match" +
								"	LEFT OUTER JOIN Goal ON Period.Id = Goal.Period" +
								" WHERE" +
								"	Team.Id = " + team.id +
								"	AND Goal.IsForMyTeam IS NOT NULL" +
								" GROUP BY" +
								"	Goal.IsForMyTeam", 
							[], 
							doCountGoals, 
							fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getTeamTopScorer: function(team, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql(
							" SELECT" + 
							"	MAX(Cnt) AS CNT" +
							"	, GoalScorerPlayerId" +
							"	, GoalScorerFirstName" +
							"	, GoalScorerLastName" +
							" FROM (" +
							"	SELECT" +
							"		Count(GoalScorer.Id) AS Cnt" +
							"		, GoalScorer.Id AS GoalScorerPlayerId" +
							"		, GoalScorer.FirstName AS GoalScorerFirstName" +
							"		, GoalScorer.LastName AS GoalScorerLastName" +
							"	 FROM Match" +
							"		INNER JOIN Team ON Team.Id = Match.Team" +
							"		LEFT OUTER JOIN Period ON Match.Id = Period.Match" +
							"		LEFT OUTER JOIN Goal ON Period.Id = Goal.Period" +
							"		LEFT OUTER JOIN Player AS GoalScorer ON GoalScorer.Id = Goal.Player" +
							"	 WHERE" +
							"		Team.Id = " + team.id +
							"		AND Goal.IsForMyTeam = 1" +
							"		AND GoalScorer.Type = " + variables.PLAYER_TYPE +
							"	 GROUP BY" +
							"		GoalScorer.Id" +
							")", 
					[], 
					doCountTopScorer, 
					fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    }
	}

	function doTeams(tx, results) {
		//Empty array but not re-init it!! otherwise it does not work
	    _teams.length = 0;
		for (var i=0; i<results.rows.length; i++){
			_teams.push( new Team(results.rows.item(i).Id, results.rows.item(i).Name) );
		}

		console.log("doTeams: " + angular.toJson(_teams) );
	}

	function doCountMatches(tx, results) {
		if( results.rows.length == 1 ) {
			variables.teamNrOfMatches = results.rows.item(0).Cnt;
		} else {
			variables.teamNrOfMatches = 0;
		}
	}

	function doCountGoals(tx, results) {
		if( results.rows.length == 1 ) {
			if( SqlToBoolean(results.rows.item(0).IsForMyTeam) ) {
				variables.teamNrOfGoalsScored = results.rows.item(0).Cnt;
			} else {
				variables.teamNrOfGoalsAgainst = results.rows.item(0).Cnt;
			}
		} else if( results.rows.length == 2 ) {
			if( SqlToBoolean(results.rows.item(0).IsForMyTeam) ) {
				variables.teamNrOfGoalsScored = results.rows.item(0).Cnt;
			} else {
				variables.teamNrOfGoalsAgainst = results.rows.item(0).Cnt;
			}
			if( SqlToBoolean(results.rows.item(1).IsForMyTeam) ) {
				variables.teamNrOfGoalsScored = results.rows.item(1).Cnt;
			} else {
				variables.teamNrOfGoalsAgainst = results.rows.item(1).Cnt;
			}
		} else {
			variables.teamNrOfGoalsScored = 0;
			variables.teamNrOfGoalsAgainst = 0;
		}
	}

	function doCountTopScorer(tx, results) {
		if( results.rows.length == 1 ) {
			variables.teamTopScorer = new Player(results.rows.item(0).GoalScorerPlayerId, results.rows.item(0).GoalScorerFirstName, results.rows.item(0).GoalScorerLastName);
		} else {
			variables.teamTopScorer = null;
		}
	}
})

/*
                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                        
PPPPPPPPPPPPPPPPP   lllllll                                                                               SSSSSSSSSSSSSSS                                                                 iiii                                          
P::::::::::::::::P  l:::::l                                                                             SS:::::::::::::::S                                                               i::::i                                         
P::::::PPPPPP:::::P l:::::l                                                                            S:::::SSSSSS::::::S                                                                iiii                                          
PP:::::P     P:::::Pl:::::l                                                                            S:::::S     SSSSSSS                                                                                                              
  P::::P     P:::::P l::::l   aaaaaaaaaaaaayyyyyyy           yyyyyyy eeeeeeeeeeee    rrrrr   rrrrrrrrr S:::::S                eeeeeeeeeeee    rrrrr   rrrrrrrrrvvvvvvv           vvvvvvviiiiiii     cccccccccccccccc    eeeeeeeeeeee    
  P::::P     P:::::P l::::l   a::::::::::::ay:::::y         y:::::yee::::::::::::ee  r::::rrr:::::::::rS:::::S              ee::::::::::::ee  r::::rrr:::::::::rv:::::v         v:::::v i:::::i   cc:::::::::::::::c  ee::::::::::::ee  
  P::::PPPPPP:::::P  l::::l   aaaaaaaaa:::::ay:::::y       y:::::ye::::::eeeee:::::eer:::::::::::::::::rS::::SSSS          e::::::eeeee:::::eer:::::::::::::::::rv:::::v       v:::::v   i::::i  c:::::::::::::::::c e::::::eeeee:::::ee
  P:::::::::::::PP   l::::l            a::::a y:::::y     y:::::ye::::::e     e:::::err::::::rrrrr::::::rSS::::::SSSSS    e::::::e     e:::::err::::::rrrrr::::::rv:::::v     v:::::v    i::::i c:::::::cccccc:::::ce::::::e     e:::::e
  P::::PPPPPPPPP     l::::l     aaaaaaa:::::a  y:::::y   y:::::y e:::::::eeeee::::::e r:::::r     r:::::r  SSS::::::::SS  e:::::::eeeee::::::e r:::::r     r:::::r v:::::v   v:::::v     i::::i c::::::c     ccccccce:::::::eeeee::::::e
  P::::P             l::::l   aa::::::::::::a   y:::::y y:::::y  e:::::::::::::::::e  r:::::r     rrrrrrr     SSSSSS::::S e:::::::::::::::::e  r:::::r     rrrrrrr  v:::::v v:::::v      i::::i c:::::c             e:::::::::::::::::e 
  P::::P             l::::l  a::::aaaa::::::a    y:::::y:::::y   e::::::eeeeeeeeeee   r:::::r                      S:::::Se::::::eeeeeeeeeee   r:::::r               v:::::v:::::v       i::::i c:::::c             e::::::eeeeeeeeeee  
  P::::P             l::::l a::::a    a:::::a     y:::::::::y    e:::::::e            r:::::r                      S:::::Se:::::::e            r:::::r                v:::::::::v        i::::i c::::::c     ccccccce:::::::e           
PP::::::PP          l::::::la::::a    a:::::a      y:::::::y     e::::::::e           r:::::r          SSSSSSS     S:::::Se::::::::e           r:::::r                 v:::::::v        i::::::ic:::::::cccccc:::::ce::::::::e          
P::::::::P          l::::::la:::::aaaa::::::a       y:::::y       e::::::::eeeeeeee   r:::::r          S::::::SSSSSS:::::S e::::::::eeeeeeee   r:::::r                  v:::::v         i::::::i c:::::::::::::::::c e::::::::eeeeeeee  
P::::::::P          l::::::l a::::::::::aa:::a     y:::::y         ee:::::::::::::e   r:::::r          S:::::::::::::::SS   ee:::::::::::::e   r:::::r                   v:::v          i::::::i  cc:::::::::::::::c  ee:::::::::::::e  
PPPPPPPPPP          llllllll  aaaaaaaaaa  aaaa    y:::::y            eeeeeeeeeeeeee   rrrrrrr           SSSSSSSSSSSSSSS       eeeeeeeeeeeeee   rrrrrrr                    vvv           iiiiiiii    cccccccccccccccc    eeeeeeeeeeeeee  
                                                 y:::::y                                                                                                                                                                                
                                                y:::::y                                                                                                                                                                                 
                                               y:::::y                                                                                                                                                                                  
                                              y:::::y                                                                                                                                                                                   
                                             yyyyyyy                                                                                                                                                                                    

*/
.factory('PlayerService', function() {
  	var _players = [];
  	var _teamPlayers = [];
  	var _currentPlayer = null;

	return {
		currentPlayer : _currentPlayer,
		players : _players,
		teamPlayers : _teamPlayers,
	    getAllPlayers: function(fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT Id, FirstName, LastName FROM Player WHERE Type = ' + variables.PLAYER_TYPE + ' ORDER BY LastName asc', [], doPlayers, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    insertPlayer: function(player, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('INSERT INTO Player(FirstName, LastName, Type) VALUES ("' + player.firstname + '", "' + player.lastname + '", ' + variables.PLAYER_TYPE + ')'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    updatePlayer: function(player, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('UPDATE Player SET FirstName = "' + player.firstname + '", LastName = "' + player.lastname + '"WHERE Id = "' + player.id + '"'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    deletePlayer: function(player, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('DELETE FROM Player WHERE Id = "' + player.id + '"'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getPlayersForTeam: function(team, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT Player.Id, Player.FirstName, Player.LastName FROM PlayerTeam INNER JOIN Player ON Player.Id = PlayerTeam.Player WHERE Team = ' + team.id + ' AND Player.Type = 0 ORDER BY Player.LastName asc', [], doTeamPlayers, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getAllPlayersNotInTeam: function(team, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT Id, FirstName, LastName FROM Player WHERE Id NOT IN (SELECT Player FROM PlayerTeam WHERE Team = ' + team.id + ') AND Player.Type = 0 ORDER BY LastName asc', [], doPlayers, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getNrOfMatches: function(player, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT count(*) as cnt FROM MatchPlayer WHERE Player  = ' + player.id, [], doCountMatches, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getNrOfGoals: function(player, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT count(*) as cnt FROM Goal WHERE Player  = ' + player.id, [], doCountGoals, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    }
	}

	function doPlayers(tx, results) {
		//Empty array but not re-init it!! otherwise it does not work
	    _players.length = 0;
		for (var i=0; i<results.rows.length; i++){
			_players.push( new Player(results.rows.item(i).Id, results.rows.item(i).FirstName, results.rows.item(i).LastName) );
		}

		console.log("doPlayers: " + angular.toJson(_players) );
	}

	function doTeamPlayers(tx, results) {
		//Empty array but not re-init it!! otherwise it does not work
	    _teamPlayers.length = 0;
		for (var i=0; i<results.rows.length; i++){
			_teamPlayers.push( new Player(results.rows.item(i).Id, results.rows.item(i).FirstName, results.rows.item(i).LastName) );
		}

		console.log("doTeamPlayers: " + angular.toJson(_teamPlayers) );
	}

	function doCountMatches(tx, results) {

		if( results.rows.length == 1 ) {
			variables.playerNrOfMatches = results.rows.item(0).cnt;
		} else {
			variables.playerNrOfMatches = 0;
		}
	}

	function doCountGoals(tx, results) {

		if( results.rows.length == 1 ) {
			variables.playerNrOfGoals = results.rows.item(0).cnt;
		} else {
			variables.playerNrOfGoals = 0;
		}
	}
})

/*                                                                                                                                                                                                                                         
MMMMMMMM               MMMMMMMM                          tttt                             hhhhhhh                SSSSSSSSSSSSSSS                                                                 iiii                                          
M:::::::M             M:::::::M                       ttt:::t                             h:::::h              SS:::::::::::::::S                                                               i::::i                                         
M::::::::M           M::::::::M                       t:::::t                             h:::::h             S:::::SSSSSS::::::S                                                                iiii                                          
M:::::::::M         M:::::::::M                       t:::::t                             h:::::h             S:::::S     SSSSSSS                                                                                                              
M::::::::::M       M::::::::::M  aaaaaaaaaaaaa  ttttttt:::::ttttttt        cccccccccccccccch::::h hhhhh       S:::::S                eeeeeeeeeeee    rrrrr   rrrrrrrrrvvvvvvv           vvvvvvviiiiiii     cccccccccccccccc    eeeeeeeeeeee    
M:::::::::::M     M:::::::::::M  a::::::::::::a t:::::::::::::::::t      cc:::::::::::::::ch::::hh:::::hhh    S:::::S              ee::::::::::::ee  r::::rrr:::::::::rv:::::v         v:::::v i:::::i   cc:::::::::::::::c  ee::::::::::::ee  
M:::::::M::::M   M::::M:::::::M  aaaaaaaaa:::::at:::::::::::::::::t     c:::::::::::::::::ch::::::::::::::hh   S::::SSSS          e::::::eeeee:::::eer:::::::::::::::::rv:::::v       v:::::v   i::::i  c:::::::::::::::::c e::::::eeeee:::::ee
M::::::M M::::M M::::M M::::::M           a::::atttttt:::::::tttttt    c:::::::cccccc:::::ch:::::::hhh::::::h   SS::::::SSSSS    e::::::e     e:::::err::::::rrrrr::::::rv:::::v     v:::::v    i::::i c:::::::cccccc:::::ce::::::e     e:::::e
M::::::M  M::::M::::M  M::::::M    aaaaaaa:::::a      t:::::t          c::::::c     ccccccch::::::h   h::::::h    SSS::::::::SS  e:::::::eeeee::::::e r:::::r     r:::::r v:::::v   v:::::v     i::::i c::::::c     ccccccce:::::::eeeee::::::e
M::::::M   M:::::::M   M::::::M  aa::::::::::::a      t:::::t          c:::::c             h:::::h     h:::::h       SSSSSS::::S e:::::::::::::::::e  r:::::r     rrrrrrr  v:::::v v:::::v      i::::i c:::::c             e:::::::::::::::::e 
M::::::M    M:::::M    M::::::M a::::aaaa::::::a      t:::::t          c:::::c             h:::::h     h:::::h            S:::::Se::::::eeeeeeeeeee   r:::::r               v:::::v:::::v       i::::i c:::::c             e::::::eeeeeeeeeee  
M::::::M     MMMMM     M::::::Ma::::a    a:::::a      t:::::t    ttttttc::::::c     ccccccch:::::h     h:::::h            S:::::Se:::::::e            r:::::r                v:::::::::v        i::::i c::::::c     ccccccce:::::::e           
M::::::M               M::::::Ma::::a    a:::::a      t::::::tttt:::::tc:::::::cccccc:::::ch:::::h     h:::::hSSSSSSS     S:::::Se::::::::e           r:::::r                 v:::::::v        i::::::ic:::::::cccccc:::::ce::::::::e          
M::::::M               M::::::Ma:::::aaaa::::::a      tt::::::::::::::t c:::::::::::::::::ch:::::h     h:::::hS::::::SSSSSS:::::S e::::::::eeeeeeee   r:::::r                  v:::::v         i::::::i c:::::::::::::::::c e::::::::eeeeeeee  
M::::::M               M::::::M a::::::::::aa:::a       tt:::::::::::tt  cc:::::::::::::::ch:::::h     h:::::hS:::::::::::::::SS   ee:::::::::::::e   r:::::r                   v:::v          i::::::i  cc:::::::::::::::c  ee:::::::::::::e  
MMMMMMMM               MMMMMMMM  aaaaaaaaaa  aaaa         ttttttttttt      cccccccccccccccchhhhhhh     hhhhhhh SSSSSSSSSSSSSSS       eeeeeeeeeeeeee   rrrrrrr                    vvv           iiiiiiii    cccccccccccccccc    eeeeeeeeeeeeee  
*/
.factory('MatchService', function(currentMatchService) {
  	var _matches = [];
  	var _teams = [];
  	var _replacements = [];
  	var _cards = [];

	return {
		matches : _matches,
		teams : _teams,
		replacements : _replacements,
		cards : _cards,
	    getAllMatches: function(fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					//	Should split into teams array that can be used in Home page
					tx.executeSql('SELECT Match.Id, Opponent, MatchDate, IsHomeMatch, TeamScore, OpponentScore, Team.Name AS TeamName FROM Match INNER JOIN Team ON Team.Id = Match.Team ORDER BY Team.Name, MatchDate asc', [], doTeams, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getOpponentPlayer: function(fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT Id, FirstName, LastName FROM Player WHERE Type = 1 ORDER BY LastName asc', [], 
									function(tx, results) {
										currentMatchService.opponentPlayer = new Player(results.rows.item(0).Id, results.rows.item(0).FirstName, results.rows.item(0).LastName);
										console.log("_opponentPlayer: " + angular.toJson(currentMatchService.opponentPlayer));
									}, 
									fnError
								); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    geUndefinedPlayer: function(fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT Id, FirstName, LastName FROM Player WHERE Type = 2 ORDER BY LastName asc', [], 
									function(tx, results) {
										currentMatchService.undefinedPlayer = new Player(results.rows.item(0).Id, results.rows.item(0).FirstName, results.rows.item(0).LastName);
										console.log("undefinedPlayer: " + angular.toJson(currentMatchService.undefinedPlayer));
									}, 
									fnError
								); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    addMatches: function(fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('INSERT INTO Match(Id, Opponent, MatchDate, IsHomeMatch, TeamScore, OpponentScore, Team) VALUES (1, "Wildert", ' + (new Date(2014, 11, 1, 0, 0, 0)).getTime() + ', 0, 10, 5, 1)'); 
					tx.executeSql('INSERT INTO Match(Id, Opponent, MatchDate, IsHomeMatch, TeamScore, OpponentScore, Team) VALUES (2, "Kalmthout", ' + (new Date(2014, 11, 8, 0, 0, 0)).getTime() + ', 0, 5, 16, 1)'); 

					tx.executeSql('INSERT INTO MatchPlayer(Id, Match, Player) VALUES (1, 1, ' + currentMatchService.undefinedPlayer.id + ')'); 
					tx.executeSql('INSERT INTO MatchPlayer(Id, Match, Player) VALUES (2, 2, ' + currentMatchService.undefinedPlayer.id + ')'); 

					tx.executeSql('INSERT INTO Period(Id, Number, Length, Match) VALUES (1, 0, 15, 1)');
					tx.executeSql('INSERT INTO Period(Id, Number, Length, Match) VALUES (2, 1, 15, 1)');
					tx.executeSql('INSERT INTO Period(Id, Number, Length, Match) VALUES (3, 2, 15, 1)');
					tx.executeSql('INSERT INTO Period(Id, Number, Length, Match) VALUES (4, 3, 15, 1)');

					tx.executeSql('INSERT INTO Period(Id, Number, Length, Match) VALUES (5, 0, 15, 2)');
					tx.executeSql('INSERT INTO Period(Id, Number, Length, Match) VALUES (6, 1, 15, 2)');
					tx.executeSql('INSERT INTO Period(Id, Number, Length, Match) VALUES (7, 2, 15, 2)');
					tx.executeSql('INSERT INTO Period(Id, Number, Length, Match) VALUES (8, 3, 15, 2)');
					
					//match1, period1
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (1, 1, 1, 0, 1, 1, ' + currentMatchService.undefinedPlayer.id + ')'); 
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (2, 1, 2, 0, 1, 1, ' + currentMatchService.undefinedPlayer.id + ')'); 
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (3, 1, 2, 1, 0, 1, ' + currentMatchService.opponentPlayer.id + ')'); 
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (4, 1, 2, 2, 0, 1, ' + currentMatchService.opponentPlayer.id + ')');
					//match1, period2
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (5, 20, 2, 3, 0, 2, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (6, 23, 2, 4, 0, 2, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (7, 24, 3, 4, 1, 2, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (8, 29, 4, 4, 1, 2, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (9, 30, 5, 4, 1, 2, ' + currentMatchService.undefinedPlayer.id + ')');
					//match1, period3
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (10, 31, 6, 4, 1, 3, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (11, 33, 7, 4, 1, 3, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (12, 43, 8, 4, 1, 3, ' + currentMatchService.undefinedPlayer.id + ')');
					//match1, period4
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (13, 46, 9, 4, 1, 4, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (14, 50, 10, 4, 1, 4, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (15, 54, 10, 5, 0, 4, ' + currentMatchService.opponentPlayer.id + ')');

					
					//match2, period1
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (16, 1, 1, 0, 1, 5, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (17, 4, 1, 1, 0, 5, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (18, 4, 1, 2, 0, 5, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (19, 11, 1, 3, 0, 5, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (20, 11, 1, 4, 0, 5, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (21, 11, 1, 5, 0, 5, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (22, 15, 2, 5, 1, 5, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (23, 15, 2, 6, 0, 5, ' + currentMatchService.opponentPlayer.id + ')');
					//match2, period2
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (24, 17, 3, 6, 1, 6, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (25, 21, 4, 6, 1, 6, ' + currentMatchService.undefinedPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (26, 30, 4, 7, 0, 6, ' + currentMatchService.opponentPlayer.id + ')');
					//match2, period3
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (27, 34, 4, 8, 0, 7, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (28, 41, 5, 8, 1, 7, ' + currentMatchService.undefinedPlayer.id + ')');
					//match2, period4
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (29, 46, 5, 9, 0, 8, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (30, 48, 5, 10, 0, 8, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (31, 48, 5, 11, 0, 8, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (32, 51, 5, 12, 0, 8, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (33, 53, 5, 13, 0, 8, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (34, 57, 5, 14, 0, 8, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (35, 58, 5, 15, 0, 8, ' + currentMatchService.opponentPlayer.id + ')');
					tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (36, 59, 5, 16, 0, 8, ' + currentMatchService.opponentPlayer.id + ')');
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    insertMatch: function(match, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					console.log("INSERT MATCH: " + 'INSERT INTO Match(Id, Opponent, MatchDate, IsHomeMatch, TeamScore, OpponentScore, Team) VALUES (' + match.id + ', "' + match.opponent + '", ' + match.date.getTime() + ', ' + booleanToSql(match.home) + ', ' + match.teamScore + ', ' + match.opponentScore + ', ' + match.team.id + ')');
					tx.executeSql('INSERT INTO Match(Id, Opponent, MatchDate, IsHomeMatch, TeamScore, OpponentScore, Team) VALUES (' + match.id + ', "' + match.opponent + '", ' + match.date.getTime() + ', ' + booleanToSql(match.home) + ', ' + match.teamScore + ', ' + match.opponentScore + ', ' + match.team.id + ')'); 
					//loop over all arrays of match
					$.each(match.matchplayers, function(index, matchplayer) {
						console.log("INSERT MATCHPLAYER: " + 'INSERT INTO MatchPlayer(Id, Match, Player, IsBasePlayer) VALUES (' + matchplayer.id + ', ' + matchplayer.match.id + ', ' + matchplayer.player.id + ', ' + booleanToSql(matchplayer.isBasePlayer) + ')');
						tx.executeSql('INSERT INTO MatchPlayer(Id, Match, Player, IsBasePlayer) VALUES (' + matchplayer.id + ', ' + matchplayer.match.id + ', ' + matchplayer.player.id + ', ' + booleanToSql(matchplayer.isBasePlayer) + ')'); 
					});
					$.each(match.periods, function(index, period) {
						console.log("INSERT PERIOD: " + 'INSERT INTO Period(Id, Number, Length, Match) VALUES (' + period.id + ', ' + period.number + ', ' + period.length + ', ' + period.match.id + ')');
						tx.executeSql('INSERT INTO Period(Id, Number, Length, Match) VALUES (' + period.id + ', ' + period.number + ', ' + period.length + ', ' + period.match.id + ')');

						$.each(period.goals, function(index, goal) {
							console.log("goal.player: " + goal.player);
							console.log("goal.period: " + period);
							console.log("INSERT GOAL: " + 'INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (' + goal.id + ', ' + goal.minute + ', ' + goal.scoreMyTeam + ', ' + goal.scoreOpponent + ', ' + booleanToSql(goal.isForMyTeam) + ', ' + period.id + ', ' + goal.player.id + ')');
							tx.executeSql('INSERT INTO Goal(Id, Minute, ScoreMyTeam, ScoreOpponent, IsForMyTeam, Period, Player) VALUES (' + goal.id + ', ' + goal.minute + ', ' + goal.scoreMyTeam + ', ' + goal.scoreOpponent + ', ' + booleanToSql(goal.isForMyTeam) + ', ' + period.id + ', ' + goal.player.id + ')'); 
						});
					});
					$.each(match.replacements, function(index, replacement) {
						console.log("INSERT REPLACEMENT: " + 'INSERT INTO Replacement(Id, Match, MatchPlayerIn, MatchPlayerOut, Minute) VALUES (NULL, ' + match.id + ', ' + replacement.playerIn.id + ', ' + replacement.playerOut.id + ', ' + replacement.minute + ')');
						tx.executeSql('INSERT INTO Replacement(Id, Match, MatchPlayerIn, MatchPlayerOut, Minute) VALUES (NULL, ' + match.id + ', ' + replacement.playerIn.id + ', ' + replacement.playerOut.id + ', ' + replacement.minute + ')'); 
					});
					$.each(match.cards, function(index, card) {
						console.log("INSERT CARD: " + 'INSERT INTO Card(Id, MatchPlayer, CardType, Match, Minute) VALUES (NULL, ' + card.matchPlayer.id + ', ' + card.cardType.id + ', ' + match.id + ', ' + card.minute + ')');
						tx.executeSql('INSERT INTO Card(Id, MatchPlayer, CardType, Match, Minute) VALUES (NULL, ' + card.matchPlayer.id + ', ' + card.cardType.id + ', ' + match.id + ', ' + card.minute + ')'); 
					});
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    deleteMatch: function(match, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					//TODO: tx.executeSql('DELETE FROM Team WHERE Id = "' + team.id + '"'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getMatchById: function(match, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					//big query over all tables
					//		OUTER JOIN nr Match/MatchPlayer
					//	Should split into teams array that can be used in Home page
					tx.executeSql(
								" SELECT" +
								"	Match.Id AS MatchId" +
								"	, Match.Opponent" +
								"	, Match.MatchDate" +
								"	, Match.IsHomeMatch" +
								"	, Match.TeamScore" +
								"	, Match.OpponentScore" +
								"	, Team.Id AS TeamId" +
								"	, Team.Name AS TeamName" +
								"	, LineUp.Id AS PlayerId" +
								"	, LineUp.FirstName AS MatchPlayerFirstName" +
								"	, LineUp.LastName AS MatchPlayerLastName" +
								"	, Period.Id As PeriodId" +
								"	, Period.Number" +
								"	, Period.Length" +
								"	, Goal.Id AS GoalId" +
								"	, Goal.Minute" +
								"	, Goal.ScoreMyTeam" +
								"	, Goal.ScoreOpponent" +
								"	, Goal.IsForMyTeam" +
								"	, GoalScorer.Id AS GoalScorerPlayerId" +
								"	, GoalScorer.Type AS GoalScorerPlayerType" +
								"	, GoalScorer.FirstName AS GoalScorerFirstName" +
								"	, GoalScorer.LastName AS GoalScorerLastName" +
								"	, MatchPlayer.Id AS MatchPlayerId" +
								"	, MatchPlayer.IsBasePlayer" +
								" FROM Match" +
								"	INNER JOIN Team ON Team.Id = Match.Team" +
								"	INNER JOIN MatchPlayer ON Match.Id = MatchPlayer.Match" +
								"	INNER JOIN Player AS LineUp ON LineUp.Id = MatchPlayer.Player" +
								"	LEFT OUTER JOIN Period ON Match.Id = Period.Match" +
								"	LEFT OUTER JOIN Goal ON Period.Id = Goal.Period" +
								"	LEFT OUTER JOIN Player AS GoalScorer ON GoalScorer.Id = Goal.Player" +
								" WHERE" +
								"	Match.Id = " + match.id +
								" ORDER BY" +
								"	Period.Number" +
								"	, GoalId" 
								, [], doMatch, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getReplacementsByMatchId: function(match, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {
					tx.executeSql(
								" SELECT" +
								"	Replacement.Id AS RepId" +
								"	, Replacement.Minute" +
								"	, RepMatchPlayerIn.Id AS RepMatchPlayerInId" +
								"	, RepMatchPlayerIn.IsBasePlayer AS RepMatchPlayerInIsBasePlayer" +
								"	, RepPlayerIn.Id AS RepPlayerInId" +
								"	, RepPlayerIn.FirstName AS RepPlayerInFirstName" +
								"	, RepPlayerIn.LastName AS RepPlayerInLastName" +
								"	, RepMatchPlayerOut.Id AS RepMatchPlayerOutId" +
								"	, RepMatchPlayerOut.IsBasePlayer AS RepMatchPlayerOutIsBasePlayer" +
								"	, RepPlayerOut.Id AS RepPlayerOutId" +
								"	, RepPlayerOut.FirstName AS RepPlayerOutFirstName" +
								"	, RepPlayerOut.LastName AS RepPlayerOutLastName" +
								" FROM Replacement" +
								"	INNER JOIN MatchPlayer AS RepMatchPlayerIn ON Replacement.MatchPlayerIn = RepMatchPlayerIn.Id" +
								"	INNER JOIN Player AS RepPlayerIn ON RepPlayerIn.Id = RepMatchPlayerIn.Player" +
								"	INNER JOIN MatchPlayer AS RepMatchPlayerOut ON Replacement.MatchPlayerOut = RepMatchPlayerOut.Id" +
								"	INNER JOIN Player AS RepPlayerOut ON RepPlayerOut.Id = RepMatchPlayerOut.Player" +
								" WHERE" +
								"	Replacement.Match = " + match.id 
								, [], doReplacements, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getCardsByMatchId: function(match, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {
					tx.executeSql(
								" SELECT" +
								"	Card.Id AS CardId" +
								"	, Card.Minute" +
								"	, CardType.Id AS CardTypeId" +
								"	, CardType.Name" +
								"	, CardType.Description" +
								"	, CardType.ImageLink" +
								"	, MatchPlayer.Id AS MatchPlayerId" +
								"	, MatchPlayer.IsBasePlayer" +
								"	, Player.Id AS PlayerId" +
								"	, Player.FirstName" +
								"	, Player.LastName" +
								" FROM Card" +
								"	INNER JOIN CardType ON Card.CardType = CardType.Id" +
								"	INNER JOIN MatchPlayer ON Card.MatchPlayer = MatchPlayer.Id" +
								"	INNER JOIN Player ON Player.Id = MatchPlayer.Player" +
								" WHERE" +
								"	Card.Match = " + match.id
								, [], doCards, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    getMaxIds: function(fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT MAX(Id) AS Id FROM Match', [], 
									function (tx, results) {
										if( results.rows.length > 0 ) {
											variables.maxMatchId = results.rows.item(0).Id;
										} 
										if(variables.maxMatchId == null) {
											variables.maxMatchId = 0;
										}
										console.log("_maxMatchId: " + variables.maxMatchId);
									} , fnError);

					tx.executeSql('SELECT MAX(Id) AS Id FROM Period', [], 
									function (tx, results) {
										if( results.rows.length > 0 ) {
											variables.maxPeriodId = results.rows.item(0).Id;
										}
										if(variables.maxPeriodId == null) {
											variables.maxPeriodId = 0;
										}
										console.log("_maxPeriodId: " + variables.maxPeriodId);
									}, fnError);

					tx.executeSql('SELECT MAX(Id) AS Id FROM Goal', [], 
									function (tx, results) {
										if( results.rows.length > 0 ) {
											variables.maxGoalId = results.rows.item(0).Id;
										}
										if(variables.maxGoalId == null) {
											variables.maxGoalId = 0;
										}
										console.log("_maxGoalId: " + variables.maxGoalId);
									}, fnError);

					tx.executeSql('SELECT MAX(Id) AS Id FROM MatchPlayer', [], 
									function(tx, results) {
										if( results.rows.length > 0 ) {
											variables.maxMatchPlayerId = results.rows.item(0).Id;
										}
										if(variables.maxMatchPlayerId == null) {
											variables.maxMatchPlayerId = 0;
										}
										console.log("_maxMatchPlayerId: " + variables.maxMatchPlayerId);
									}, fnError);
				}, 
				fnError, 
				fnSuccess
			);
	    }
	}

	function doTeams(tx, results) {
		//Empty array but not re-init it!! otherwise it does not work
	    _teams.length = 0;
	    var prevTeam = null;
		var tempMatch;
		for (var i=0; i<results.rows.length; i++){
			if( prevTeam == null || (prevTeam != null && results.rows.item(i).TeamName != prevTeam.name) ) {
				prevTeam = new Team(results.rows.item(i).Id, results.rows.item(i).TeamName);
				_teams.push( prevTeam );
			}
			//add team
			tempMatch = new Match(results.rows.item(i).Id, results.rows.item(i).TeamName, new Date(results.rows.item(i).MatchDate), results.rows.item(i).Opponent, SqlToBoolean(results.rows.item(i).IsHomeMatch));
			tempMatch.teamScore = results.rows.item(i).TeamScore;
			tempMatch.opponentScore = results.rows.item(i).OpponentScore;
			prevTeam.matches.push( tempMatch );
		}

		console.log("doMatch: " + angular.toJson(_teams) );
	}

	function doMatch(tx, results) {

		var tempMatch = new Match(results.rows.item(0).MatchId, results.rows.item(0).TeamName, new Date(results.rows.item(0).MatchDate), results.rows.item(0).Opponent, SqlToBoolean(results.rows.item(0).IsHomeMatch));
		tempMatch.teamScore = results.rows.item(0).TeamScore;
		tempMatch.opponentScore = results.rows.item(0).OpponentScore;

		var tempLineUpper = new Player(results.rows.item(0).PlayerId, results.rows.item(0).MatchPlayerFirstName, results.rows.item(0).MatchPlayerLastName);
		var tempMatchPlayer = new MatchPlayer(results.rows.item(0).MatchPlayerId, null, tempLineUpper, SqlToBoolean(results.rows.item(0).IsBasePlayer));
		tempMatch.matchplayers.push( tempMatchPlayer );

		var tempPeriod = new Period(results.rows.item(0).PeriodId, tempMatch, results.rows.item(0).Number, results.rows.item(0).Length);
		tempMatch.periods.push( tempPeriod );

		var tempGoalScorer = new Player(results.rows.item(0).GoalScorerPlayerId, results.rows.item(0).GoalScorerFirstName, results.rows.item(0).GoalScorerLastName);
		var tempGoal = new Goal(results.rows.item(0).GoalId, results.rows.item(0).Minute, results.rows.item(0).ScoreMyTeam, results.rows.item(0).ScoreOpponent, results.rows.item(0).IsForMyTeam, tempGoalScorer, tempPeriod);

		if( tempGoalScorer.id != '' && tempGoalScorer.id != null ) {
			tempPeriod.goals.push( tempGoal );
		}

		//First record is done => go to 2nd
		for (var i=1; i<results.rows.length; i++) {

			//match players
			var found = false;
			$.each(tempMatch.matchplayers, function(index, matchplayer) {
				if ( matchplayer.id == results.rows.item(i).MatchPlayerId && !found ) {
					found = true;
					return false;
				}
			});
			if( !found ) {
				tempLineUpper = new Player(results.rows.item(i).PlayerId, results.rows.item(i).MatchPlayerFirstName, results.rows.item(i).MatchPlayerLastName);
				tempMatchPlayer = new MatchPlayer(results.rows.item(i).MatchPlayerId, null, tempLineUpper, SqlToBoolean(results.rows.item(i).IsBasePlayer));
				tempMatch.matchplayers.push( tempMatchPlayer );
			}

			//periods
			if ( tempPeriod.id != results.rows.item(i).PeriodId ) {
				tempPeriod = new Period(results.rows.item(i).PeriodId, tempMatch, results.rows.item(i).Number, results.rows.item(i).Length);
				tempMatch.periods.push( tempPeriod );
			}
			console.log("tempMatch.periods: " + tempMatch.periods.length);

			//Goal
			console.log("tempPeriod.goals: " + tempGoal.id + " / record goal id: " + results.rows.item(i).GoalId);
			if ( tempGoal.id != results.rows.item(i).GoalId && results.rows.item(i).GoalId != null ) {
				//check if opponent => use opponent from currentMatchService
				if( results.rows.item(i).GoalScorerPlayerType == variables.OPPONENT_TYPE ) {
					tempGoalScorer = currentMatchService.opponentPlayer;
				} else {
					tempGoalScorer = new Player(results.rows.item(i).GoalScorerPlayerId, results.rows.item(i).GoalScorerFirstName, results.rows.item(i).GoalScorerLastName);					
				}
				tempGoal = new Goal(results.rows.item(i).GoalId, results.rows.item(i).Minute, results.rows.item(i).ScoreMyTeam, results.rows.item(i).ScoreOpponent, SqlToBoolean(results.rows.item(i).IsForMyTeam), tempGoalScorer, tempPeriod);
				tempPeriod.goals.push( tempGoal );
			}
			console.log("tempPeriod.goals: " + tempPeriod.goals.length);
		}

		//console.log("doMatch: " + angular.toJson(_teams) );
		currentMatchService.currentMatch = tempMatch;
	}

	function doReplacements(tx, results) {
		//Empty array but not re-init it!! otherwise it does not work
	    _replacements.length = 0;
		for (var i=0; i<results.rows.length; i++){
			var tempPlayerIn = new Player(results.rows.item(i).RepPlayerInId, results.rows.item(i).RepPlayerInFirstName, results.rows.item(i).RepPlayerInLastName);
			var tempMatchPlayerIn = new MatchPlayer(results.rows.item(i).RepMatchPlayerInId, null, tempPlayerIn, SqlToBoolean(results.rows.item(i).RepMatchPlayerInIsBasePlayer));
			var tempPlayerOut = new Player(results.rows.item(i).RepPlayerOutId, results.rows.item(i).RepPlayerOutFirstName, results.rows.item(i).RepPlayerOutLastName);
			var tempMatchPlayerOut = new MatchPlayer(results.rows.item(i).RepMatchPlayerOutId, null, tempPlayerOut, SqlToBoolean(results.rows.item(i).RepMatchPlayerOutIsBasePlayer));

			var replacement = new Replacement(results.rows.item(i).RepId, tempMatchPlayerIn, tempMatchPlayerOut, results.rows.item(i).Minute);

			_replacements.push( replacement );
		}
	}

	function doCards(tx, results) {
		//Empty array but not re-init it!! otherwise it does not work
	    _cards.length = 0;
		for (var i=0; i<results.rows.length; i++){
			var cardType = new CardType(results.rows.item(i).CardTypeId, results.rows.item(i).Name, results.rows.item(i).Description, results.rows.item(i).ImageLink);
			var tempPlayer = new Player(results.rows.item(i).PlayerId, results.rows.item(i).FirstName, results.rows.item(i).LastName);
			var tempMatchPlayer = new MatchPlayer(results.rows.item(i).MatchPlayerId, null, tempPlayer, SqlToBoolean(results.rows.item(i).IsBasePlayer));

			var card = new Card(results.rows.item(i).CardId, tempMatchPlayer, cardType, results.rows.item(i).Minute);

			_cards.push( card );
		}
	}
})

/* 
   SSSSSSSSSSSSSSS                              tttt               tttt            iiii                                                           SSSSSSSSSSSSSSS                                                                 iiii                                          
 SS:::::::::::::::S                          ttt:::t            ttt:::t           i::::i                                                        SS:::::::::::::::S                                                               i::::i                                         
S:::::SSSSSS::::::S                          t:::::t            t:::::t            iiii                                                        S:::::SSSSSS::::::S                                                                iiii                                          
S:::::S     SSSSSSS                          t:::::t            t:::::t                                                                        S:::::S     SSSSSSS                                                                                                              
S:::::S                eeeeeeeeeeee    ttttttt:::::tttttttttttttt:::::ttttttt    iiiiiiinnnn  nnnnnnnn       ggggggggg   ggggg    ssssssssss   S:::::S                eeeeeeeeeeee    rrrrr   rrrrrrrrrvvvvvvv           vvvvvvviiiiiii     cccccccccccccccc    eeeeeeeeeeee    
S:::::S              ee::::::::::::ee  t:::::::::::::::::tt:::::::::::::::::t    i:::::in:::nn::::::::nn    g:::::::::ggg::::g  ss::::::::::s  S:::::S              ee::::::::::::ee  r::::rrr:::::::::rv:::::v         v:::::v i:::::i   cc:::::::::::::::c  ee::::::::::::ee  
 S::::SSSS          e::::::eeeee:::::eet:::::::::::::::::tt:::::::::::::::::t     i::::in::::::::::::::nn  g:::::::::::::::::gss:::::::::::::s  S::::SSSS          e::::::eeeee:::::eer:::::::::::::::::rv:::::v       v:::::v   i::::i  c:::::::::::::::::c e::::::eeeee:::::ee
  SS::::::SSSSS    e::::::e     e:::::etttttt:::::::tttttttttttt:::::::tttttt     i::::inn:::::::::::::::ng::::::ggggg::::::ggs::::::ssss:::::s  SS::::::SSSSS    e::::::e     e:::::err::::::rrrrr::::::rv:::::v     v:::::v    i::::i c:::::::cccccc:::::ce::::::e     e:::::e
    SSS::::::::SS  e:::::::eeeee::::::e      t:::::t            t:::::t           i::::i  n:::::nnnn:::::ng:::::g     g:::::g  s:::::s  ssssss     SSS::::::::SS  e:::::::eeeee::::::e r:::::r     r:::::r v:::::v   v:::::v     i::::i c::::::c     ccccccce:::::::eeeee::::::e
       SSSSSS::::S e:::::::::::::::::e       t:::::t            t:::::t           i::::i  n::::n    n::::ng:::::g     g:::::g    s::::::s             SSSSSS::::S e:::::::::::::::::e  r:::::r     rrrrrrr  v:::::v v:::::v      i::::i c:::::c             e:::::::::::::::::e 
            S:::::Se::::::eeeeeeeeeee        t:::::t            t:::::t           i::::i  n::::n    n::::ng:::::g     g:::::g       s::::::s               S:::::Se::::::eeeeeeeeeee   r:::::r               v:::::v:::::v       i::::i c:::::c             e::::::eeeeeeeeeee  
            S:::::Se:::::::e                 t:::::t    tttttt  t:::::t    tttttt i::::i  n::::n    n::::ng::::::g    g:::::g ssssss   s:::::s             S:::::Se:::::::e            r:::::r                v:::::::::v        i::::i c::::::c     ccccccce:::::::e           
SSSSSSS     S:::::Se::::::::e                t::::::tttt:::::t  t::::::tttt:::::ti::::::i n::::n    n::::ng:::::::ggggg:::::g s:::::ssss::::::sSSSSSSS     S:::::Se::::::::e           r:::::r                 v:::::::v        i::::::ic:::::::cccccc:::::ce::::::::e          
S::::::SSSSSS:::::S e::::::::eeeeeeee        tt::::::::::::::t  tt::::::::::::::ti::::::i n::::n    n::::n g::::::::::::::::g s::::::::::::::s S::::::SSSSSS:::::S e::::::::eeeeeeee   r:::::r                  v:::::v         i::::::i c:::::::::::::::::c e::::::::eeeeeeee  
S:::::::::::::::SS   ee:::::::::::::e          tt:::::::::::tt    tt:::::::::::tti::::::i n::::n    n::::n  gg::::::::::::::g  s:::::::::::ss  S:::::::::::::::SS   ee:::::::::::::e   r:::::r                   v:::v          i::::::i  cc:::::::::::::::c  ee:::::::::::::e  
 SSSSSSSSSSSSSSS       eeeeeeeeeeeeee            ttttttttttt        ttttttttttt  iiiiiiii nnnnnn    nnnnnn    gggggggg::::::g   sssssssssss     SSSSSSSSSSSSSSS       eeeeeeeeeeeeee   rrrrrrr                    vvv           iiiiiiii    cccccccccccccccc    eeeeeeeeeeeeee  
                                                                                                                      g:::::g                                                                                                                                                   
                                                                                                          gggggg      g:::::g                                                                                                                                                   
                                                                                                          g:::::gg   gg:::::g                                                                                                                                                   
                                                                                                           g::::::ggg:::::::g                                                                                                                                                   
                                                                                                            gg:::::::::::::g                                                                                                                                                    
                                                                                                              ggg::::::ggg                                                                                                                                                      
                                                                                                                 gggggg                                                    
*/
.factory('SettingsService', function() {
  	var _settings = [];

	return {
		settings : _settings,
	    getAllSettings: function(fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT Id, Name, Value FROM Setting', [], doSettings, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    insertSetting: function(setting, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('INSERT INTO Setting(Name, Value) VALUES ("' + setting.name + '", "' + setting.value + '")'); 
				}, 
				fnError, 
				fnSuccess
			);
	    },
	    updateSetting: function(setting, fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('UPDATE Setting SET Name = "' + setting.name + '", Value = "' + setting.value + '" WHERE Id = ' + setting.id); 
				}, 
				fnError, 
				fnSuccess
			);
	    }
	}

	function doSettings(tx, results) {
		//Empty array but not re-init it!! otherwise it does not work
	    _settings.length = 0;
		for (var i=0; i<results.rows.length; i++){
			_settings.push( new Setting(results.rows.item(i).Id, results.rows.item(i).Name, results.rows.item(i).Value) );
		}

		console.log("doSettings: " + angular.toJson(_settings) );
	}
})

/* 
                                                                      dddddddd                                                                                                                                                  
        CCCCCCCCCCCCC                                                 d::::::d                    SSSSSSSSSSSSSSS                                                                 iiii                                          
     CCC::::::::::::C                                                 d::::::d                  SS:::::::::::::::S                                                               i::::i                                         
   CC:::::::::::::::C                                                 d::::::d                 S:::::SSSSSS::::::S                                                                iiii                                          
  C:::::CCCCCCCC::::C                                                 d:::::d                  S:::::S     SSSSSSS                                                                                                              
 C:::::C       CCCCCC  aaaaaaaaaaaaa  rrrrr   rrrrrrrrr       ddddddddd:::::d     ssssssssss   S:::::S                eeeeeeeeeeee    rrrrr   rrrrrrrrrvvvvvvv           vvvvvvviiiiiii     cccccccccccccccc    eeeeeeeeeeee    
C:::::C                a::::::::::::a r::::rrr:::::::::r    dd::::::::::::::d   ss::::::::::s  S:::::S              ee::::::::::::ee  r::::rrr:::::::::rv:::::v         v:::::v i:::::i   cc:::::::::::::::c  ee::::::::::::ee  
C:::::C                aaaaaaaaa:::::ar:::::::::::::::::r  d::::::::::::::::d ss:::::::::::::s  S::::SSSS          e::::::eeeee:::::eer:::::::::::::::::rv:::::v       v:::::v   i::::i  c:::::::::::::::::c e::::::eeeee:::::ee
C:::::C                         a::::arr::::::rrrrr::::::rd:::::::ddddd:::::d s::::::ssss:::::s  SS::::::SSSSS    e::::::e     e:::::err::::::rrrrr::::::rv:::::v     v:::::v    i::::i c:::::::cccccc:::::ce::::::e     e:::::e
C:::::C                  aaaaaaa:::::a r:::::r     r:::::rd::::::d    d:::::d  s:::::s  ssssss     SSS::::::::SS  e:::::::eeeee::::::e r:::::r     r:::::r v:::::v   v:::::v     i::::i c::::::c     ccccccce:::::::eeeee::::::e
C:::::C                aa::::::::::::a r:::::r     rrrrrrrd:::::d     d:::::d    s::::::s             SSSSSS::::S e:::::::::::::::::e  r:::::r     rrrrrrr  v:::::v v:::::v      i::::i c:::::c             e:::::::::::::::::e 
C:::::C               a::::aaaa::::::a r:::::r            d:::::d     d:::::d       s::::::s               S:::::Se::::::eeeeeeeeeee   r:::::r               v:::::v:::::v       i::::i c:::::c             e::::::eeeeeeeeeee  
 C:::::C       CCCCCCa::::a    a:::::a r:::::r            d:::::d     d:::::d ssssss   s:::::s             S:::::Se:::::::e            r:::::r                v:::::::::v        i::::i c::::::c     ccccccce:::::::e           
  C:::::CCCCCCCC::::Ca::::a    a:::::a r:::::r            d::::::ddddd::::::dds:::::ssss::::::sSSSSSSS     S:::::Se::::::::e           r:::::r                 v:::::::v        i::::::ic:::::::cccccc:::::ce::::::::e          
   CC:::::::::::::::Ca:::::aaaa::::::a r:::::r             d:::::::::::::::::ds::::::::::::::s S::::::SSSSSS:::::S e::::::::eeeeeeee   r:::::r                  v:::::v         i::::::i c:::::::::::::::::c e::::::::eeeeeeee  
     CCC::::::::::::C a::::::::::aa:::ar:::::r              d:::::::::ddd::::d s:::::::::::ss  S:::::::::::::::SS   ee:::::::::::::e   r:::::r                   v:::v          i::::::i  cc:::::::::::::::c  ee:::::::::::::e  
        CCCCCCCCCCCCC  aaaaaaaaaa  aaaarrrrrrr               ddddddddd   ddddd  sssssssssss     SSSSSSSSSSSSSSS       eeeeeeeeeeeeee   rrrrrrr                    vvv           iiiiiiii    cccccccccccccccc    eeeeeeeeeeeeee                                                   
*/
.factory('CardsService', function() {
  	var _cards = [];
  	var _cardTypes = [];

	return {
		cards : _cards,
		cardTypes : _cardTypes,
	    getAllCardTypes: function(fnSuccess, fnError) {

			variables.db.transaction(function(tx) {

					tx.executeSql('SELECT Id, Name, Description, ImageLink FROM CardType ORDER BY Id asc', [], doCardTypes, fnError); 
				}, 
				fnError, 
				fnSuccess
			);
	    }
	}

	function doCardTypes(tx, results) {
		//Empty array but not re-init it!! otherwise it does not work
	    _cardTypes.length = 0;
		for (var i=0; i<results.rows.length; i++){
			_cardTypes.push( new CardType(results.rows.item(i).Id, results.rows.item(i).Name, results.rows.item(i).Description, results.rows.item(i).ImageLink) );
		}

		console.log("doCardTypes: " + angular.toJson(_cardTypes) );
	}
});