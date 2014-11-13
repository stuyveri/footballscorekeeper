angular.module('SoccerKeeperApp', ['ionic', 'SoccerKeeperApp.services', 'SoccerKeeperApp.playerController'])
.config(function($stateProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
  .state('newMatch', {
    url: '/newMatch',
    templateUrl: "templates/newMatch.html"
  })
  .state('startMatch', {
    url: '/startMatch',
    templateUrl: "templates/startMatch.html"
  })
  .state('matchDetails', {
    url: '/matchdetails',
    templateUrl: "templates/MatchDetails.html"
  })
  .state('teams', {
    url: '/teams',
    templateUrl: "templates/Teams.html"
  })
  .state('manageteam', {
    url: '/manageteam',
    templateUrl: "templates/ManageTeam.html"
  })
  .state('team', {
    url: '/team',
    templateUrl: "templates/Team.html"
  })
  .state('players', {
    url: '/players',
    templateUrl: "templates/Players.html"
  })
  .state('managePlayer', {
    url: '/manageplayer',
    templateUrl: "templates/ManagePlayer.html"
  })
  .state('player', {
    url: '/player',
    templateUrl: "templates/Player.html"
  });
})

/*
                                                                                                                            tttt          MMMMMMMM               MMMMMMMM                          tttt                             hhhhhhh                SSSSSSSSSSSSSSS                                                                 iiii                                          
                                                                                                                         ttt:::t          M:::::::M             M:::::::M                       ttt:::t                             h:::::h              SS:::::::::::::::S                                                               i::::i                                         
                                                                                                                         t:::::t          M::::::::M           M::::::::M                       t:::::t                             h:::::h             S:::::SSSSSS::::::S                                                                iiii                                          
                                                                                                                         t:::::t          M:::::::::M         M:::::::::M                       t:::::t                             h:::::h             S:::::S     SSSSSSS                                                                                                              
    ccccccccccccccccuuuuuu    uuuuuu rrrrr   rrrrrrrrr   rrrrr   rrrrrrrrr       eeeeeeeeeeee    nnnn  nnnnnnnn    ttttttt:::::ttttttt    M::::::::::M       M::::::::::M  aaaaaaaaaaaaa  ttttttt:::::ttttttt        cccccccccccccccch::::h hhhhh       S:::::S                eeeeeeeeeeee    rrrrr   rrrrrrrrrvvvvvvv           vvvvvvviiiiiii     cccccccccccccccc    eeeeeeeeeeee    
  cc:::::::::::::::cu::::u    u::::u r::::rrr:::::::::r  r::::rrr:::::::::r    ee::::::::::::ee  n:::nn::::::::nn  t:::::::::::::::::t    M:::::::::::M     M:::::::::::M  a::::::::::::a t:::::::::::::::::t      cc:::::::::::::::ch::::hh:::::hhh    S:::::S              ee::::::::::::ee  r::::rrr:::::::::rv:::::v         v:::::v i:::::i   cc:::::::::::::::c  ee::::::::::::ee  
 c:::::::::::::::::cu::::u    u::::u r:::::::::::::::::r r:::::::::::::::::r  e::::::eeeee:::::een::::::::::::::nn t:::::::::::::::::t    M:::::::M::::M   M::::M:::::::M  aaaaaaaaa:::::at:::::::::::::::::t     c:::::::::::::::::ch::::::::::::::hh   S::::SSSS          e::::::eeeee:::::eer:::::::::::::::::rv:::::v       v:::::v   i::::i  c:::::::::::::::::c e::::::eeeee:::::ee
c:::::::cccccc:::::cu::::u    u::::u rr::::::rrrrr::::::rrr::::::rrrrr::::::re::::::e     e:::::enn:::::::::::::::ntttttt:::::::tttttt    M::::::M M::::M M::::M M::::::M           a::::atttttt:::::::tttttt    c:::::::cccccc:::::ch:::::::hhh::::::h   SS::::::SSSSS    e::::::e     e:::::err::::::rrrrr::::::rv:::::v     v:::::v    i::::i c:::::::cccccc:::::ce::::::e     e:::::e
c::::::c     cccccccu::::u    u::::u  r:::::r     r:::::r r:::::r     r:::::re:::::::eeeee::::::e  n:::::nnnn:::::n      t:::::t          M::::::M  M::::M::::M  M::::::M    aaaaaaa:::::a      t:::::t          c::::::c     ccccccch::::::h   h::::::h    SSS::::::::SS  e:::::::eeeee::::::e r:::::r     r:::::r v:::::v   v:::::v     i::::i c::::::c     ccccccce:::::::eeeee::::::e
c:::::c             u::::u    u::::u  r:::::r     rrrrrrr r:::::r     rrrrrrre:::::::::::::::::e   n::::n    n::::n      t:::::t          M::::::M   M:::::::M   M::::::M  aa::::::::::::a      t:::::t          c:::::c             h:::::h     h:::::h       SSSSSS::::S e:::::::::::::::::e  r:::::r     rrrrrrr  v:::::v v:::::v      i::::i c:::::c             e:::::::::::::::::e 
c:::::c             u::::u    u::::u  r:::::r             r:::::r            e::::::eeeeeeeeeee    n::::n    n::::n      t:::::t          M::::::M    M:::::M    M::::::M a::::aaaa::::::a      t:::::t          c:::::c             h:::::h     h:::::h            S:::::Se::::::eeeeeeeeeee   r:::::r               v:::::v:::::v       i::::i c:::::c             e::::::eeeeeeeeeee  
c::::::c     cccccccu:::::uuuu:::::u  r:::::r             r:::::r            e:::::::e             n::::n    n::::n      t:::::t    ttttttM::::::M     MMMMM     M::::::Ma::::a    a:::::a      t:::::t    ttttttc::::::c     ccccccch:::::h     h:::::h            S:::::Se:::::::e            r:::::r                v:::::::::v        i::::i c::::::c     ccccccce:::::::e           
c:::::::cccccc:::::cu:::::::::::::::uur:::::r             r:::::r            e::::::::e            n::::n    n::::n      t::::::tttt:::::tM::::::M               M::::::Ma::::a    a:::::a      t::::::tttt:::::tc:::::::cccccc:::::ch:::::h     h:::::hSSSSSSS     S:::::Se::::::::e           r:::::r                 v:::::::v        i::::::ic:::::::cccccc:::::ce::::::::e          
 c:::::::::::::::::c u:::::::::::::::ur:::::r             r:::::r             e::::::::eeeeeeee    n::::n    n::::n      tt::::::::::::::tM::::::M               M::::::Ma:::::aaaa::::::a      tt::::::::::::::t c:::::::::::::::::ch:::::h     h:::::hS::::::SSSSSS:::::S e::::::::eeeeeeee   r:::::r                  v:::::v         i::::::i c:::::::::::::::::c e::::::::eeeeeeee  
  cc:::::::::::::::c  uu::::::::uu:::ur:::::r             r:::::r              ee:::::::::::::e    n::::n    n::::n        tt:::::::::::ttM::::::M               M::::::M a::::::::::aa:::a       tt:::::::::::tt  cc:::::::::::::::ch:::::h     h:::::hS:::::::::::::::SS   ee:::::::::::::e   r:::::r                   v:::v          i::::::i  cc:::::::::::::::c  ee:::::::::::::e  
    cccccccccccccccc    uuuuuuuu  uuuurrrrrrr             rrrrrrr                eeeeeeeeeeeeee    nnnnnn    nnnnnn          ttttttttttt  MMMMMMMM               MMMMMMMM  aaaaaaaaaa  aaaa         ttttttttttt      cccccccccccccccchhhhhhh     hhhhhhh SSSSSSSSSSSSSSS       eeeeeeeeeeeeee   rrrrrrr                    vvv           iiiiiiii    cccccccccccccccc    eeeeeeeeeeeeee  
*/

.service('currentMatchService', function(){
	this.currentMatch = null;
	this.periodStartTime = null;
	this.interval = null;
	this.playersForTeam = [];
	this.opponentPlayer;
	//Id for SQL insert
  	this.matchId;
  	this.periodId;
  	this.goalId;
  	this.matchPlayerId;
  	//
  	this.initDone = false;
})

/*
RRRRRRRRRRRRRRRRR                                     
R::::::::::::::::R                                    
R::::::RRRRRR:::::R                                   
RR:::::R     R:::::R                                  
  R::::R     R:::::Ruuuuuu    uuuuuunnnn  nnnnnnnn    
  R::::R     R:::::Ru::::u    u::::un:::nn::::::::nn  
  R::::RRRRRR:::::R u::::u    u::::un::::::::::::::nn 
  R:::::::::::::RR  u::::u    u::::unn:::::::::::::::n
  R::::RRRRRR:::::R u::::u    u::::u  n:::::nnnn:::::n
  R::::R     R:::::Ru::::u    u::::u  n::::n    n::::n
  R::::R     R:::::Ru::::u    u::::u  n::::n    n::::n
  R::::R     R:::::Ru:::::uuuu:::::u  n::::n    n::::n
RR:::::R     R:::::Ru:::::::::::::::uun::::n    n::::n
R::::::R     R:::::R u:::::::::::::::un::::n    n::::n
R::::::R     R:::::R  uu::::::::uu:::un::::n    n::::n
RRRRRRRR     RRRRRRR    uuuuuuuu  uuuunnnnnn    nnnnnn*/

.run(function($rootScope, currentMatchService){
	$rootScope.generateUUID = function() {
    	var d = new Date().getTime();
    	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        	var r = (d + Math.random()*16)%16 | 0;
        	d = Math.floor(d/16);
        	return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    	});
    	return uuid;
	};

	//When the app comes back from background => eg update screen
	window.addEventListener("resume", function () {
		console.log("resume called");
		$rootScope.$broadcast("resumecalled");
	});
})

/*
HHHHHHHHH     HHHHHHHHH                                                                     CCCCCCCCCCCCC                                            tttt                                              lllllll lllllll                                         
H:::::::H     H:::::::H                                                                  CCC::::::::::::C                                         ttt:::t                                              l:::::l l:::::l                                         
H:::::::H     H:::::::H                                                                CC:::::::::::::::C                                         t:::::t                                              l:::::l l:::::l                                         
HH::::::H     H::::::HH                                                               C:::::CCCCCCCC::::C                                         t:::::t                                              l:::::l l:::::l                                         
  H:::::H     H:::::H     ooooooooooo      mmmmmmm    mmmmmmm       eeeeeeeeeeee     C:::::C       CCCCCC   ooooooooooo   nnnn  nnnnnnnn    ttttttt:::::ttttttt   rrrrr   rrrrrrrrr      ooooooooooo    l::::l  l::::l     eeeeeeeeeeee    rrrrr   rrrrrrrrr   
  H:::::H     H:::::H   oo:::::::::::oo  mm:::::::m  m:::::::mm   ee::::::::::::ee  C:::::C               oo:::::::::::oo n:::nn::::::::nn  t:::::::::::::::::t   r::::rrr:::::::::r   oo:::::::::::oo  l::::l  l::::l   ee::::::::::::ee  r::::rrr:::::::::r  
  H::::::HHHHH::::::H  o:::::::::::::::om::::::::::mm::::::::::m e::::::eeeee:::::eeC:::::C              o:::::::::::::::on::::::::::::::nn t:::::::::::::::::t   r:::::::::::::::::r o:::::::::::::::o l::::l  l::::l  e::::::eeeee:::::eer:::::::::::::::::r 
  H:::::::::::::::::H  o:::::ooooo:::::om::::::::::::::::::::::me::::::e     e:::::eC:::::C              o:::::ooooo:::::onn:::::::::::::::ntttttt:::::::tttttt   rr::::::rrrrr::::::ro:::::ooooo:::::o l::::l  l::::l e::::::e     e:::::err::::::rrrrr::::::r
  H:::::::::::::::::H  o::::o     o::::om:::::mmm::::::mmm:::::me:::::::eeeee::::::eC:::::C              o::::o     o::::o  n:::::nnnn:::::n      t:::::t          r:::::r     r:::::ro::::o     o::::o l::::l  l::::l e:::::::eeeee::::::e r:::::r     r:::::r
  H::::::HHHHH::::::H  o::::o     o::::om::::m   m::::m   m::::me:::::::::::::::::e C:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r     rrrrrrro::::o     o::::o l::::l  l::::l e:::::::::::::::::e  r:::::r     rrrrrrr
  H:::::H     H:::::H  o::::o     o::::om::::m   m::::m   m::::me::::::eeeeeeeeeee  C:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r            o::::o     o::::o l::::l  l::::l e::::::eeeeeeeeeee   r:::::r            
  H:::::H     H:::::H  o::::o     o::::om::::m   m::::m   m::::me:::::::e            C:::::C       CCCCCCo::::o     o::::o  n::::n    n::::n      t:::::t    ttttttr:::::r            o::::o     o::::o l::::l  l::::l e:::::::e            r:::::r            
HH::::::H     H::::::HHo:::::ooooo:::::om::::m   m::::m   m::::me::::::::e            C:::::CCCCCCCC::::Co:::::ooooo:::::o  n::::n    n::::n      t::::::tttt:::::tr:::::r            o:::::ooooo:::::ol::::::ll::::::le::::::::e           r:::::r            
H:::::::H     H:::::::Ho:::::::::::::::om::::m   m::::m   m::::m e::::::::eeeeeeee     CC:::::::::::::::Co:::::::::::::::o  n::::n    n::::n      tt::::::::::::::tr:::::r            o:::::::::::::::ol::::::ll::::::l e::::::::eeeeeeee   r:::::r            
H:::::::H     H:::::::H oo:::::::::::oo m::::m   m::::m   m::::m  ee:::::::::::::e       CCC::::::::::::C oo:::::::::::oo   n::::n    n::::n        tt:::::::::::ttr:::::r             oo:::::::::::oo l::::::ll::::::l  ee:::::::::::::e   r:::::r            
HHHHHHHHH     HHHHHHHHH   ooooooooooo   mmmmmm   mmmmmm   mmmmmm    eeeeeeeeeeeeee          CCCCCCCCCCCCC   ooooooooooo     nnnnnn    nnnnnn          ttttttttttt  rrrrrrr               ooooooooooo   llllllllllllllll    eeeeeeeeeeeeee   rrrrrrr            
*/

.controller('HomeController', function($scope, $ionicActionSheet, $location, $ionicPlatform, $ionicPopup, currentMatchService, MatchService) {
	$scope.teams;

	$ionicPlatform.ready(function () {
		//retrieve all matches
		MatchService.getAllMatches(success, error);
		MatchService.getOpponentPlayer(successOpponent, error);
		MatchService.getMaxIds(successGetIds, error);
		currentMatchService.initDone = true;


		$("#preffile").val(variables.savedData);
	});

	$("#barFooter").show();

	$scope.clickListItem = function(match) {
		currentMatchService.currentMatch = match;
		//console.log("match:" + angular.toJson(currentMatchService.currentMatch));

		var hideSheet = $ionicActionSheet.show({
			buttons: [
				{ text: 'Show' },
				{ text: 'Edit' }
			],
			destructiveText: 'Delete',
			titleText: 'Actions on match',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			buttonClicked: function(index) {
				if( index == 0 ) {
					//Show
					//currentMatch is set on Service
					MatchService.getMatchById(match, successForward, error);
				}
				return true;
			},
			destructiveButtonClicked: function() {
				//delete 
				return true;
			},
		});
	};

	function success()  {
		$scope.$apply(
			function() {
		    	console.log("HomeController.success called");

				$scope.teams = MatchService.teams;
			}
		);
	};

	function successForward()  {
		$scope.$apply(
			function() {
				console.log("HomeController.successForward called");
				$location.path('/matchdetails');
			}
		);
	};

	function successOpponent()  {
		    	console.log("HomeController.successOpponentId called: " + angular.toJson(variables.opponent));
		    	console.log("HomeController.successOpponentId called end: " + angular.toJson(currentMatchService.opponentPlayer));
	};

	function successGetIds()  {
		$scope.$apply(
			function() {
		    	console.log("HomeController.successGetIds called");

				currentMatchService.matchId = variables.maxMatchId;
				currentMatchService.periodId = variables.maxPeriodId;
				currentMatchService.goalId = variables.maxGoalId;
				currentMatchService.matchPlayerId = variables.maxMatchPlayerId;

		    	console.log("HomeController.successGetIds end: match: " + currentMatchService.matchId + '/period: ' + currentMatchService.periodId + '/goal: ' + currentMatchService.goalId + '/matchplayer: ' + currentMatchService.matchPlayerId);
			}
		);
	};

	function error(err) {
    	console.log("Error processing SQL: " + angular.toJson(err));
		$ionicPopup.alert({
			title: 'Score Keeper',
			template: 'Database Error: ' + angular.toJson(err)
		});
	};
})

/*
TTTTTTTTTTTTTTTTTTTTTTT                                                                                 CCCCCCCCCCCCC                                            tttt                                              lllllll lllllll                                         
T:::::::::::::::::::::T                                                                              CCC::::::::::::C                                         ttt:::t                                              l:::::l l:::::l                                         
T:::::::::::::::::::::T                                                                            CC:::::::::::::::C                                         t:::::t                                              l:::::l l:::::l                                         
T:::::TT:::::::TT:::::T                                                                           C:::::CCCCCCCC::::C                                         t:::::t                                              l:::::l l:::::l                                         
TTTTTT  T:::::T  TTTTTTeeeeeeeeeeee    aaaaaaaaaaaaa      mmmmmmm    mmmmmmm       ssssssssss    C:::::C       CCCCCC   ooooooooooo   nnnn  nnnnnnnn    ttttttt:::::ttttttt   rrrrr   rrrrrrrrr      ooooooooooo    l::::l  l::::l     eeeeeeeeeeee    rrrrr   rrrrrrrrr   
        T:::::T      ee::::::::::::ee  a::::::::::::a   mm:::::::m  m:::::::mm   ss::::::::::s  C:::::C               oo:::::::::::oo n:::nn::::::::nn  t:::::::::::::::::t   r::::rrr:::::::::r   oo:::::::::::oo  l::::l  l::::l   ee::::::::::::ee  r::::rrr:::::::::r  
        T:::::T     e::::::eeeee:::::eeaaaaaaaaa:::::a m::::::::::mm::::::::::mss:::::::::::::s C:::::C              o:::::::::::::::on::::::::::::::nn t:::::::::::::::::t   r:::::::::::::::::r o:::::::::::::::o l::::l  l::::l  e::::::eeeee:::::eer:::::::::::::::::r 
        T:::::T    e::::::e     e:::::e         a::::a m::::::::::::::::::::::ms::::::ssss:::::sC:::::C              o:::::ooooo:::::onn:::::::::::::::ntttttt:::::::tttttt   rr::::::rrrrr::::::ro:::::ooooo:::::o l::::l  l::::l e::::::e     e:::::err::::::rrrrr::::::r
        T:::::T    e:::::::eeeee::::::e  aaaaaaa:::::a m:::::mmm::::::mmm:::::m s:::::s  ssssss C:::::C              o::::o     o::::o  n:::::nnnn:::::n      t:::::t          r:::::r     r:::::ro::::o     o::::o l::::l  l::::l e:::::::eeeee::::::e r:::::r     r:::::r
        T:::::T    e:::::::::::::::::e aa::::::::::::a m::::m   m::::m   m::::m   s::::::s      C:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r     rrrrrrro::::o     o::::o l::::l  l::::l e:::::::::::::::::e  r:::::r     rrrrrrr
        T:::::T    e::::::eeeeeeeeeee a::::aaaa::::::a m::::m   m::::m   m::::m      s::::::s   C:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r            o::::o     o::::o l::::l  l::::l e::::::eeeeeeeeeee   r:::::r            
        T:::::T    e:::::::e         a::::a    a:::::a m::::m   m::::m   m::::mssssss   s:::::s  C:::::C       CCCCCCo::::o     o::::o  n::::n    n::::n      t:::::t    ttttttr:::::r            o::::o     o::::o l::::l  l::::l e:::::::e            r:::::r            
      TT:::::::TT  e::::::::e        a::::a    a:::::a m::::m   m::::m   m::::ms:::::ssss::::::s  C:::::CCCCCCCC::::Co:::::ooooo:::::o  n::::n    n::::n      t::::::tttt:::::tr:::::r            o:::::ooooo:::::ol::::::ll::::::le::::::::e           r:::::r            
      T:::::::::T   e::::::::eeeeeeeea:::::aaaa::::::a m::::m   m::::m   m::::ms::::::::::::::s    CC:::::::::::::::Co:::::::::::::::o  n::::n    n::::n      tt::::::::::::::tr:::::r            o:::::::::::::::ol::::::ll::::::l e::::::::eeeeeeee   r:::::r            
      T:::::::::T    ee:::::::::::::e a::::::::::aa:::am::::m   m::::m   m::::m s:::::::::::ss       CCC::::::::::::C oo:::::::::::oo   n::::n    n::::n        tt:::::::::::ttr:::::r             oo:::::::::::oo l::::::ll::::::l  ee:::::::::::::e   r:::::r            
      TTTTTTTTTTT      eeeeeeeeeeeeee  aaaaaaaaaa  aaaammmmmm   mmmmmm   mmmmmm  sssssssssss            CCCCCCCCCCCCC   ooooooooooo     nnnnnn    nnnnnn          ttttttttttt  rrrrrrr               ooooooooooo   llllllllllllllll    eeeeeeeeeeeeee   rrrrrrr            
*/

.controller('TeamsController', function($scope, $location, $ionicPopup, $ionicActionSheet, TeamService) {
	$scope.teams = TeamService.teams;

	TeamService.getAllTeams(success, error);
	
	$scope.delete = function(team) {
		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			buttons: [],
			destructiveText: 'Delete',
			titleText: 'Are you sure?',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			destructiveButtonClicked: function() {
				TeamService.deleteTeam(team, successRefresh, error);
				return true;
			}
		});
	};
	
	$scope.edit = function(team) {
		$location.path('/manageteam').search( team );
	};
	
	$scope.details = function(team) {
		$location.path('/team').search( team );
	};

	function success()  {
		$scope.$apply(
			function() {
		    	console.log("TeamsController.success called");
		    	$scope.teams = TeamService.teams;

				console.log("doTeams in success: " + angular.toJson($scope.teams) );
				console.log("doTeams in success2: " + angular.toJson(TeamService.teams) );
			}
		);
	};

	function successRefresh()  {
		$scope.$apply(
			function() {
		    	console.log("TeamsController.successRefresh called");

				TeamService.getAllTeams(success, error);
			}
		);
	};

	function error(err) {
    	console.log("Error processing SQL: " + angular.toJson(err));
		$ionicPopup.alert({
			title: 'Teams',
			template: 'Database Error: ' + angular.toJson(err)
		});
	};
})

/*
TTTTTTTTTTTTTTTTTTTTTTT                                                                CCCCCCCCCCCCC                                            tttt                                              lllllll lllllll                                         
T:::::::::::::::::::::T                                                             CCC::::::::::::C                                         ttt:::t                                              l:::::l l:::::l                                         
T:::::::::::::::::::::T                                                           CC:::::::::::::::C                                         t:::::t                                              l:::::l l:::::l                                         
T:::::TT:::::::TT:::::T                                                          C:::::CCCCCCCC::::C                                         t:::::t                                              l:::::l l:::::l                                         
TTTTTT  T:::::T  TTTTTTeeeeeeeeeeee    aaaaaaaaaaaaa      mmmmmmm    mmmmmmm    C:::::C       CCCCCC   ooooooooooo   nnnn  nnnnnnnn    ttttttt:::::ttttttt   rrrrr   rrrrrrrrr      ooooooooooo    l::::l  l::::l     eeeeeeeeeeee    rrrrr   rrrrrrrrr   
        T:::::T      ee::::::::::::ee  a::::::::::::a   mm:::::::m  m:::::::mm C:::::C               oo:::::::::::oo n:::nn::::::::nn  t:::::::::::::::::t   r::::rrr:::::::::r   oo:::::::::::oo  l::::l  l::::l   ee::::::::::::ee  r::::rrr:::::::::r  
        T:::::T     e::::::eeeee:::::eeaaaaaaaaa:::::a m::::::::::mm::::::::::mC:::::C              o:::::::::::::::on::::::::::::::nn t:::::::::::::::::t   r:::::::::::::::::r o:::::::::::::::o l::::l  l::::l  e::::::eeeee:::::eer:::::::::::::::::r 
        T:::::T    e::::::e     e:::::e         a::::a m::::::::::::::::::::::mC:::::C              o:::::ooooo:::::onn:::::::::::::::ntttttt:::::::tttttt   rr::::::rrrrr::::::ro:::::ooooo:::::o l::::l  l::::l e::::::e     e:::::err::::::rrrrr::::::r
        T:::::T    e:::::::eeeee::::::e  aaaaaaa:::::a m:::::mmm::::::mmm:::::mC:::::C              o::::o     o::::o  n:::::nnnn:::::n      t:::::t          r:::::r     r:::::ro::::o     o::::o l::::l  l::::l e:::::::eeeee::::::e r:::::r     r:::::r
        T:::::T    e:::::::::::::::::e aa::::::::::::a m::::m   m::::m   m::::mC:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r     rrrrrrro::::o     o::::o l::::l  l::::l e:::::::::::::::::e  r:::::r     rrrrrrr
        T:::::T    e::::::eeeeeeeeeee a::::aaaa::::::a m::::m   m::::m   m::::mC:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r            o::::o     o::::o l::::l  l::::l e::::::eeeeeeeeeee   r:::::r            
        T:::::T    e:::::::e         a::::a    a:::::a m::::m   m::::m   m::::m C:::::C       CCCCCCo::::o     o::::o  n::::n    n::::n      t:::::t    ttttttr:::::r            o::::o     o::::o l::::l  l::::l e:::::::e            r:::::r            
      TT:::::::TT  e::::::::e        a::::a    a:::::a m::::m   m::::m   m::::m  C:::::CCCCCCCC::::Co:::::ooooo:::::o  n::::n    n::::n      t::::::tttt:::::tr:::::r            o:::::ooooo:::::ol::::::ll::::::le::::::::e           r:::::r            
      T:::::::::T   e::::::::eeeeeeeea:::::aaaa::::::a m::::m   m::::m   m::::m   CC:::::::::::::::Co:::::::::::::::o  n::::n    n::::n      tt::::::::::::::tr:::::r            o:::::::::::::::ol::::::ll::::::l e::::::::eeeeeeee   r:::::r            
      T:::::::::T    ee:::::::::::::e a::::::::::aa:::am::::m   m::::m   m::::m     CCC::::::::::::C oo:::::::::::oo   n::::n    n::::n        tt:::::::::::ttr:::::r             oo:::::::::::oo l::::::ll::::::l  ee:::::::::::::e   r:::::r            
      TTTTTTTTTTT      eeeeeeeeeeeeee  aaaaaaaaaa  aaaammmmmm   mmmmmm   mmmmmm        CCCCCCCCCCCCC   ooooooooooo     nnnnnn    nnnnnn          ttttttttttt  rrrrrrr               ooooooooooo   llllllllllllllll    eeeeeeeeeeeeee   rrrrrrr            
*/

.controller('TeamController', function($scope, $location, $ionicPopup, TeamService, PlayerService) {
	$scope.teamName;
	$scope.team = $location.search();
	$scope.players;
	$scope.teamplayers;
	$scope.playerToAdd;

	console.log( "got team:" + angular.toJson($scope.team) );

	//if we get a team, then update or details
	if( $scope.team != null && $scope.team.name != null ) {
		console.log( "got team name:" + $scope.team.name );
		$scope.teamName = $scope.team.name;
		$("#btnAddTeam").hide();
		$("#btnUpdateTeam").show();

		PlayerService.getPlayersForTeam($scope.team, successRefreshTeamPlayers, error);
		PlayerService.getAllPlayersNotInTeam($scope.team, successRefreshPlayers, error);
	} else {
		$("#btnAddTeam").show();
		$("#btnUpdateTeam").hide();
	}
	
	$scope.addTeam = function() {
		TeamService.insertTeam(new Team(-1, $scope.teamName), success, error);
	};
	
	$scope.updateTeam = function() {
		$scope.team.name = $scope.teamName;
		TeamService.updateTeam($scope.team, success, error);
	};
	
	$scope.edit = function(team) {
		TeamService.updateTeam(team, success, error);
	};

	$scope.addPlayer = function() {
    	console.log("addPlayer called for: " + $scope.playerToAdd);

    	TeamService.addPlayerToTeam($scope.team, $scope.playerToAdd, successAddPlayer, error);

		PlayerService.getPlayersForTeam($scope.team, successRefreshTeamPlayers, error);
		PlayerService.getAllPlayersNotInTeam($scope.team, successRefreshPlayers, error);
	};

	$scope.deletePlayer = function(player) {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			buttons: [],
			destructiveText: 'Delete',
			titleText: 'Are you sure?',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			destructiveButtonClicked: function() {
				TeamService.removePlayerFromTeam($scope.team, player, successAddPlayer, error);
				PlayerService.getPlayersForTeam($scope.team, successRefreshTeamPlayers, error);
				return true;
			}
		});
	}

	function success()  {
		$scope.$apply(
			function() {
		    	console.log("TeamController.success called");
				
				$location.path('/teams');
			}
		);
	};

	function successRefreshTeamPlayers()  {
		$scope.$apply(
			function() {
		    	console.log("TeamController.successRefreshTeamPlayers called");

				$scope.teamplayers = PlayerService.teamPlayers;
			}
		);
	};

	function successRefreshPlayers()  {
		$scope.$apply(
			function() {
		    	console.log("TeamController.successRefreshPlayers called");

				$scope.players = PlayerService.players;

				console.log("$scope.players: " + angular.toJson($scope.players) );
				console.log("PlayerService.players: " + angular.toJson(PlayerService.players) );
			}
		);
	};

	function successAddPlayer()  {
		$scope.$apply(
			function() {
    			console.log("TeamController.successAddPlayer called");
			}
		);
	};

	function error(err) {
    	console.log("Error processing SQL: " + angular.toJson(err));
		$ionicPopup.alert({
			title: 'Teams',
			template: 'Database Error: ' + angular.toJson(err)
		});
	};
})

/*
   SSSSSSSSSSSSSSS                                                                                                          CCCCCCCCCCCCC                                            tttt                                              lllllll lllllll                                         
 SS:::::::::::::::S                                                                                                      CCC::::::::::::C                                         ttt:::t                                              l:::::l l:::::l                                         
S:::::SSSSSS::::::S                                                                                                    CC:::::::::::::::C                                         t:::::t                                              l:::::l l:::::l                                         
S:::::S     SSSSSSS                                                                                                   C:::::CCCCCCCC::::C                                         t:::::t                                              l:::::l l:::::l                                         
S:::::S               ooooooooooo       cccccccccccccccc    cccccccccccccccc    eeeeeeeeeeee    rrrrr   rrrrrrrrr    C:::::C       CCCCCC   ooooooooooo   nnnn  nnnnnnnn    ttttttt:::::ttttttt   rrrrr   rrrrrrrrr      ooooooooooo    l::::l  l::::l     eeeeeeeeeeee    rrrrr   rrrrrrrrr   
S:::::S             oo:::::::::::oo   cc:::::::::::::::c  cc:::::::::::::::c  ee::::::::::::ee  r::::rrr:::::::::r  C:::::C               oo:::::::::::oo n:::nn::::::::nn  t:::::::::::::::::t   r::::rrr:::::::::r   oo:::::::::::oo  l::::l  l::::l   ee::::::::::::ee  r::::rrr:::::::::r  
 S::::SSSS         o:::::::::::::::o c:::::::::::::::::c c:::::::::::::::::c e::::::eeeee:::::eer:::::::::::::::::r C:::::C              o:::::::::::::::on::::::::::::::nn t:::::::::::::::::t   r:::::::::::::::::r o:::::::::::::::o l::::l  l::::l  e::::::eeeee:::::eer:::::::::::::::::r 
  SS::::::SSSSS    o:::::ooooo:::::oc:::::::cccccc:::::cc:::::::cccccc:::::ce::::::e     e:::::err::::::rrrrr::::::rC:::::C              o:::::ooooo:::::onn:::::::::::::::ntttttt:::::::tttttt   rr::::::rrrrr::::::ro:::::ooooo:::::o l::::l  l::::l e::::::e     e:::::err::::::rrrrr::::::r
    SSS::::::::SS  o::::o     o::::oc::::::c     cccccccc::::::c     ccccccce:::::::eeeee::::::e r:::::r     r:::::rC:::::C              o::::o     o::::o  n:::::nnnn:::::n      t:::::t          r:::::r     r:::::ro::::o     o::::o l::::l  l::::l e:::::::eeeee::::::e r:::::r     r:::::r
       SSSSSS::::S o::::o     o::::oc:::::c             c:::::c             e:::::::::::::::::e  r:::::r     rrrrrrrC:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r     rrrrrrro::::o     o::::o l::::l  l::::l e:::::::::::::::::e  r:::::r     rrrrrrr
            S:::::So::::o     o::::oc:::::c             c:::::c             e::::::eeeeeeeeeee   r:::::r            C:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r            o::::o     o::::o l::::l  l::::l e::::::eeeeeeeeeee   r:::::r            
            S:::::So::::o     o::::oc::::::c     cccccccc::::::c     ccccccce:::::::e            r:::::r             C:::::C       CCCCCCo::::o     o::::o  n::::n    n::::n      t:::::t    ttttttr:::::r            o::::o     o::::o l::::l  l::::l e:::::::e            r:::::r            
SSSSSSS     S:::::So:::::ooooo:::::oc:::::::cccccc:::::cc:::::::cccccc:::::ce::::::::e           r:::::r              C:::::CCCCCCCC::::Co:::::ooooo:::::o  n::::n    n::::n      t::::::tttt:::::tr:::::r            o:::::ooooo:::::ol::::::ll::::::le::::::::e           r:::::r            
S::::::SSSSSS:::::So:::::::::::::::o c:::::::::::::::::c c:::::::::::::::::c e::::::::eeeeeeee   r:::::r               CC:::::::::::::::Co:::::::::::::::o  n::::n    n::::n      tt::::::::::::::tr:::::r            o:::::::::::::::ol::::::ll::::::l e::::::::eeeeeeee   r:::::r            
S:::::::::::::::SS  oo:::::::::::oo   cc:::::::::::::::c  cc:::::::::::::::c  ee:::::::::::::e   r:::::r                 CCC::::::::::::C oo:::::::::::oo   n::::n    n::::n        tt:::::::::::ttr:::::r             oo:::::::::::oo l::::::ll::::::l  ee:::::::::::::e   r:::::r            
 SSSSSSSSSSSSSSS      ooooooooooo       cccccccccccccccc    cccccccccccccccc    eeeeeeeeeeeeee   rrrrrrr                    CCCCCCCCCCCCC   ooooooooooo     nnnnnn    nnnnnn          ttttttttttt  rrrrrrr               ooooooooooo   llllllllllllllll    eeeeeeeeeeeeee   rrrrrrr            
*/

.controller('SoccerController', function($scope, $ionicPopup, $location, currentMatchService, TeamService, PlayerService) {
	$scope.today = new Date();
	$scope.periodCounter = 3;
	$scope.isHome = true;
	$scope.team;
	$scope.teams;
	$scope.playersforteam;

	TeamService.getAllTeams(success, error);
	
	$scope.addPeriod = function() { 
		console.log("addPeriod called.");
		$("#newPeriod").before( "<div class='row' id='period" + $scope.periodCounter + "'><label class='item item-input'><span class='input-label'>Period " + $scope.periodCounter + "</span><input type='number' id='txtPeriodLen" + $scope.periodCounter + "' placeholder='Lengte'/></label></div>" );
		$scope.periodCounter++;
	};
	
	$scope.startMatch = function() { 
		console.log("startMatch called.");
		
		//Fill match & teams
		currentMatchService.matchId = currentMatchService.matchId + 1;
		console.log("startMatch, matchId: " + currentMatchService.matchId);
		currentMatchService.currentMatch = new Match( currentMatchService.matchId, $scope.team, new Date($("#txtDate").val()), $("#txtOpponent").val(),  $scope.isHome );
		
		$( "input[id*='txtPeriodLen']" ).each( function(index) { 
			currentMatchService.periodId = currentMatchService.periodId + 1;
			console.log("startMatch, periodId: " + currentMatchService.periodId);
			var period = new Period( currentMatchService.periodId, currentMatchService.currentMatch, index, $( this ).val() );
			currentMatchService.currentMatch.periods.push( period );
		});
		
		$.each($scope.playersforteam, function(index, player) {
			//check if checkbox is selected
			if( player.checked ) {
				currentMatchService.matchPlayerId = currentMatchService.matchPlayerId + 1;
				console.log("startMatch, adding matchplayer:" + player.lastname + ' & Id: ' + currentMatchService.matchPlayerId);
				var matchplayer = new MatchPlayer( currentMatchService.matchPlayerId, currentMatchService.currentMatch, player );
				currentMatchService.currentMatch.matchplayers.push( matchplayer );
				currentMatchService.playersForTeam.push( matchplayer.player );
			}
		});
		
		//console.log("currentMatchService.playersForTeam:" + angular.toJson(currentMatchService.playersForTeam));
		
		$location.path('/startMatch');
	};

	$scope.teamSelected = function() {
		//get players for team
		PlayerService.getPlayersForTeam($scope.team, successRefreshTeamPlayers, error);
	};

	function success()  {
		$scope.$apply(
			function() {
		    	console.log("SoccerController.success called");

				$scope.teams = TeamService.teams;
			}
		);
	};

	function successRefreshTeamPlayers()  {
		$scope.$apply(
			function() {
		    	console.log("SoccerController.successRefreshTeamPlayers called");

				$scope.playersforteam = PlayerService.teamPlayers;
			}
		);
	};

	function error(err) {
    	console.log("Error processing SQL: " + angular.toJson(err));
		$ionicPopup.alert({
			title: 'players',
			template: 'Database Error: ' + angular.toJson(err)
		});
	};
})

/*
MMMMMMMM               MMMMMMMM                          tttt                             hhhhhhh                     CCCCCCCCCCCCC                                            tttt                                              lllllll lllllll                                         
M:::::::M             M:::::::M                       ttt:::t                             h:::::h                  CCC::::::::::::C                                         ttt:::t                                              l:::::l l:::::l                                         
M::::::::M           M::::::::M                       t:::::t                             h:::::h                CC:::::::::::::::C                                         t:::::t                                              l:::::l l:::::l                                         
M:::::::::M         M:::::::::M                       t:::::t                             h:::::h               C:::::CCCCCCCC::::C                                         t:::::t                                              l:::::l l:::::l                                         
M::::::::::M       M::::::::::M  aaaaaaaaaaaaa  ttttttt:::::ttttttt        cccccccccccccccch::::h hhhhh        C:::::C       CCCCCC   ooooooooooo   nnnn  nnnnnnnn    ttttttt:::::ttttttt   rrrrr   rrrrrrrrr      ooooooooooo    l::::l  l::::l     eeeeeeeeeeee    rrrrr   rrrrrrrrr   
M:::::::::::M     M:::::::::::M  a::::::::::::a t:::::::::::::::::t      cc:::::::::::::::ch::::hh:::::hhh    C:::::C               oo:::::::::::oo n:::nn::::::::nn  t:::::::::::::::::t   r::::rrr:::::::::r   oo:::::::::::oo  l::::l  l::::l   ee::::::::::::ee  r::::rrr:::::::::r  
M:::::::M::::M   M::::M:::::::M  aaaaaaaaa:::::at:::::::::::::::::t     c:::::::::::::::::ch::::::::::::::hh  C:::::C              o:::::::::::::::on::::::::::::::nn t:::::::::::::::::t   r:::::::::::::::::r o:::::::::::::::o l::::l  l::::l  e::::::eeeee:::::eer:::::::::::::::::r 
M::::::M M::::M M::::M M::::::M           a::::atttttt:::::::tttttt    c:::::::cccccc:::::ch:::::::hhh::::::h C:::::C              o:::::ooooo:::::onn:::::::::::::::ntttttt:::::::tttttt   rr::::::rrrrr::::::ro:::::ooooo:::::o l::::l  l::::l e::::::e     e:::::err::::::rrrrr::::::r
M::::::M  M::::M::::M  M::::::M    aaaaaaa:::::a      t:::::t          c::::::c     ccccccch::::::h   h::::::hC:::::C              o::::o     o::::o  n:::::nnnn:::::n      t:::::t          r:::::r     r:::::ro::::o     o::::o l::::l  l::::l e:::::::eeeee::::::e r:::::r     r:::::r
M::::::M   M:::::::M   M::::::M  aa::::::::::::a      t:::::t          c:::::c             h:::::h     h:::::hC:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r     rrrrrrro::::o     o::::o l::::l  l::::l e:::::::::::::::::e  r:::::r     rrrrrrr
M::::::M    M:::::M    M::::::M a::::aaaa::::::a      t:::::t          c:::::c             h:::::h     h:::::hC:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r            o::::o     o::::o l::::l  l::::l e::::::eeeeeeeeeee   r:::::r            
M::::::M     MMMMM     M::::::Ma::::a    a:::::a      t:::::t    ttttttc::::::c     ccccccch:::::h     h:::::h C:::::C       CCCCCCo::::o     o::::o  n::::n    n::::n      t:::::t    ttttttr:::::r            o::::o     o::::o l::::l  l::::l e:::::::e            r:::::r            
M::::::M               M::::::Ma::::a    a:::::a      t::::::tttt:::::tc:::::::cccccc:::::ch:::::h     h:::::h  C:::::CCCCCCCC::::Co:::::ooooo:::::o  n::::n    n::::n      t::::::tttt:::::tr:::::r            o:::::ooooo:::::ol::::::ll::::::le::::::::e           r:::::r            
M::::::M               M::::::Ma:::::aaaa::::::a      tt::::::::::::::t c:::::::::::::::::ch:::::h     h:::::h   CC:::::::::::::::Co:::::::::::::::o  n::::n    n::::n      tt::::::::::::::tr:::::r            o:::::::::::::::ol::::::ll::::::l e::::::::eeeeeeee   r:::::r            
M::::::M               M::::::M a::::::::::aa:::a       tt:::::::::::tt  cc:::::::::::::::ch:::::h     h:::::h     CCC::::::::::::C oo:::::::::::oo   n::::n    n::::n        tt:::::::::::ttr:::::r             oo:::::::::::oo l::::::ll::::::l  ee:::::::::::::e   r:::::r            
MMMMMMMM               MMMMMMMM  aaaaaaaaaa  aaaa         ttttttttttt      cccccccccccccccchhhhhhh     hhhhhhh        CCCCCCCCCCCCC   ooooooooooo     nnnnnn    nnnnnn          ttttttttttt  rrrrrrr               ooooooooooo   llllllllllllllll    eeeeeeeeeeeeee   rrrrrrr            
*/
.controller('MatchController', function($scope, $location, $ionicPopup, $ionicModal, currentMatchService, PlayerService, MatchService) {

	$scope.currentMatch = currentMatchService.currentMatch;
	$scope.periodStartTime = currentMatchService.periodStartTime;
	$scope.periodCounter = -1;
	$scope.currentPeriod = null;
	$scope.minutes = '00';
	$scope.seconds = '00';
	$scope.playersForTeam = currentMatchService.playersForTeam;
	$scope.lastGoal;

	//do not display header
	$("#barHeader").hide();
	$("#barFooter").hide();

	//When the app comes back from background => update screen
	$scope.$on('resumecalled', function(event, args) {
		console.log("resumecalled called");
		$scope.updateDisplay();
	});

	$ionicModal.fromTemplateUrl('modal/selectPlayer.html', function($ionicModal) {
		$scope.modal = $ionicModal;
	}, {
	    // Use our scope for the scope of the modal to keep it simple
	    scope: $scope,
	    // The animation we want to use for the modal entrance
	    animation: 'slide-in-up'
	});
	
	$scope.addToTeam = function(val) { 
		console.log("addToTeam called.");
		$scope.currentMatch.teamScore = currentMatchService.currentMatch.teamScore + val;
		
		if( val > 0 ) {
			//add goal to period
			$scope.addGoal(true);
		} else {
			$scope.currentPeriod.goals.pop();
		}
	};
	
	$scope.addToOpponent = function(val) { 
		console.log("addToOpponent called.");
		$scope.currentMatch.opponentScore = currentMatchService.currentMatch.opponentScore + val;
		
		if( val > 0 ) {
			//add goal to period
			$scope.addGoal(false);
		} else {
			$scope.currentPeriod.goals.pop();
		}
	};
	
	$scope.addGoal = function(isHomeTeam) { 
		console.log("addGoal called.");
		var currentTime = new Date();		
		var milis = currentTime.valueOf() - $scope.periodStartTime.valueOf();
		var diffTime = new Date(milis);

		currentMatchService.goalId = currentMatchService.goalId + 1;
		console.log("startMatch, goalId: " + currentMatchService.goalId);
		//Minutes:
		//	if higher then period.length => go for period.length
		//	add 1 minute
		//	add period lengths from previous periods
		var minute = diffTime.getMinutes() + 1;
        if( $scope.currentPeriod.length < diffTime.getMinutes() ) {
			minute = $scope.currentPeriod.length;
        }
        if( $scope.currentPeriod.number != 0 ) {
			for(var i=0; i<$scope.currentPeriod.number; i++) {
				minute = minute + $scope.currentMatch.periods[i].length;
			}
        }

		var goal = new Goal(currentMatchService.goalId, minute, currentMatchService.currentMatch.teamScore, currentMatchService.currentMatch.opponentScore, isHomeTeam, null, $scope.currentPeriod);
		$scope.currentPeriod.goals.push( goal );
		$scope.lastGoal = goal;
		
		if( isHomeTeam ) {
			//select player from modal
			$scope.modal.show();
		} else {
			$scope.lastGoal.player = currentMatchService.opponentPlayer;
			console.log("addGoal/opponentPlayer: " + angular.toJson($scope.lastGoal.player));
		}
		console.log("addGoal end: " + goal);
	};
	
	$scope.startPeriod = function() { 
		console.log("startPeriod called.");
		$scope.periodStartTime = new Date();

        $scope.minutes = '00';
        $scope.seconds = '00';
		
		$("#btnStartPeriod").hide();
		$("#btnUpdateDisplay").show();
		$("#btnAddToTeam1").show();
		$("#btnAddToTeam2").show();
		$("#btnAddToOpponent1").show();
		$("#btnAddToOpponent2").show();
		
		if( ($scope.periodCounter + 1) < $scope.currentMatch.periods.length ) {
			$scope.periodCounter++;
			$scope.currentPeriod = $scope.currentMatch.periods[$scope.periodCounter];
		} else {
			$ionicPopup.alert({
				title: 'Periods',
				template: 'All periods have passed'
			});
		}
	};
	
	$scope.updateDisplay = function() {
		console.log("updateDisplay called.");
		
		var currentTime = new Date();
		
		var milis = currentTime.valueOf() - $scope.periodStartTime.valueOf();
		var diffTime = new Date(milis);
		
		var minutesValue = diffTime.getMinutes();
		var secondsValue = diffTime.getSeconds();
				
        if (minutesValue < 10) {
            minutesValue = '0' + minutesValue;
        }
        if (secondsValue < 10) {
            secondsValue = '0' + secondsValue;
        }
        
        if( $scope.currentPeriod.length > diffTime.getMinutes() ) {
	        $scope.minutes = minutesValue;
	        $scope.seconds = secondsValue;
	    } else {
	        $scope.minutes = $scope.currentPeriod.length;
	        $scope.seconds = '00';

			if( ($scope.periodCounter + 1) == $scope.currentMatch.periods.length ) {
		        //show Save button
				$("#btnSaveData").show();
				$("#btnStartPeriod").hide();
				$("#btnUpdateDisplay").hide();
			} else {
				$("#btnStartPeriod").show();
				$("#btnUpdateDisplay").hide();
			}

			$ionicPopup.alert({
				title: 'Periods',
				template: 'Period is done. Progress to the next one!'
			});
	    }
	};

	$scope.choosePlayer = function(player) {
		console.log("MatchController.choosePlayer called: " + player.lastname);
		console.log("MatchController.choosePlayer lastGoal: " + $scope.lastGoal.minute + " / score: " + $scope.lastGoal.scoreMyTeam + "/" + $scope.lastGoal.scoreOpponent);
		$scope.lastGoal.player = player;
		$scope.modal.hide();
	};
	
	$scope.saveData = function() {
		console.log("MatchController.saveData called");

		$("#btnAddToTeam1").hide();
		$("#btnAddToTeam2").hide();
		$("#btnAddToOpponent1").hide();
		$("#btnAddToOpponent2").hide();

		MatchService.insertMatch(currentMatchService.currentMatch, success, error);
	};

	function success()  {
		$scope.$apply(
			function() {
		    	console.log("MatchController.success called");

				$ionicPopup.alert({
					title: 'Save',
					template: 'Save Done!'
				});
			}
		);
	};

	function error(err) {
    	console.log("Error processing SQL: " + angular.toJson(err));
		$ionicPopup.alert({
			title: 'Save Match',
			template: 'Database Error: ' + angular.toJson(err)
		});
	};
})

/*
MMMMMMMM               MMMMMMMM                          tttt                             hhhhhhh             DDDDDDDDDDDDD                                     tttt                              iiii  lllllll        CCCCCCCCCCCCC                                            tttt                                              lllllll lllllll                                         
M:::::::M             M:::::::M                       ttt:::t                             h:::::h             D::::::::::::DDD                               ttt:::t                             i::::i l:::::l     CCC::::::::::::C                                         ttt:::t                                              l:::::l l:::::l                                         
M::::::::M           M::::::::M                       t:::::t                             h:::::h             D:::::::::::::::DD                             t:::::t                              iiii  l:::::l   CC:::::::::::::::C                                         t:::::t                                              l:::::l l:::::l                                         
M:::::::::M         M:::::::::M                       t:::::t                             h:::::h             DDD:::::DDDDD:::::D                            t:::::t                                    l:::::l  C:::::CCCCCCCC::::C                                         t:::::t                                              l:::::l l:::::l                                         
M::::::::::M       M::::::::::M  aaaaaaaaaaaaa  ttttttt:::::ttttttt        cccccccccccccccch::::h hhhhh         D:::::D    D:::::D     eeeeeeeeeeee    ttttttt:::::ttttttt      aaaaaaaaaaaaa   iiiiiii  l::::l C:::::C       CCCCCC   ooooooooooo   nnnn  nnnnnnnn    ttttttt:::::ttttttt   rrrrr   rrrrrrrrr      ooooooooooo    l::::l  l::::l     eeeeeeeeeeee    rrrrr   rrrrrrrrr   
M:::::::::::M     M:::::::::::M  a::::::::::::a t:::::::::::::::::t      cc:::::::::::::::ch::::hh:::::hhh      D:::::D     D:::::D  ee::::::::::::ee  t:::::::::::::::::t      a::::::::::::a  i:::::i  l::::lC:::::C               oo:::::::::::oo n:::nn::::::::nn  t:::::::::::::::::t   r::::rrr:::::::::r   oo:::::::::::oo  l::::l  l::::l   ee::::::::::::ee  r::::rrr:::::::::r  
M:::::::M::::M   M::::M:::::::M  aaaaaaaaa:::::at:::::::::::::::::t     c:::::::::::::::::ch::::::::::::::hh    D:::::D     D:::::D e::::::eeeee:::::eet:::::::::::::::::t      aaaaaaaaa:::::a  i::::i  l::::lC:::::C              o:::::::::::::::on::::::::::::::nn t:::::::::::::::::t   r:::::::::::::::::r o:::::::::::::::o l::::l  l::::l  e::::::eeeee:::::eer:::::::::::::::::r 
M::::::M M::::M M::::M M::::::M           a::::atttttt:::::::tttttt    c:::::::cccccc:::::ch:::::::hhh::::::h   D:::::D     D:::::De::::::e     e:::::etttttt:::::::tttttt               a::::a  i::::i  l::::lC:::::C              o:::::ooooo:::::onn:::::::::::::::ntttttt:::::::tttttt   rr::::::rrrrr::::::ro:::::ooooo:::::o l::::l  l::::l e::::::e     e:::::err::::::rrrrr::::::r
M::::::M  M::::M::::M  M::::::M    aaaaaaa:::::a      t:::::t          c::::::c     ccccccch::::::h   h::::::h  D:::::D     D:::::De:::::::eeeee::::::e      t:::::t              aaaaaaa:::::a  i::::i  l::::lC:::::C              o::::o     o::::o  n:::::nnnn:::::n      t:::::t          r:::::r     r:::::ro::::o     o::::o l::::l  l::::l e:::::::eeeee::::::e r:::::r     r:::::r
M::::::M   M:::::::M   M::::::M  aa::::::::::::a      t:::::t          c:::::c             h:::::h     h:::::h  D:::::D     D:::::De:::::::::::::::::e       t:::::t            aa::::::::::::a  i::::i  l::::lC:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r     rrrrrrro::::o     o::::o l::::l  l::::l e:::::::::::::::::e  r:::::r     rrrrrrr
M::::::M    M:::::M    M::::::M a::::aaaa::::::a      t:::::t          c:::::c             h:::::h     h:::::h  D:::::D     D:::::De::::::eeeeeeeeeee        t:::::t           a::::aaaa::::::a  i::::i  l::::lC:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r            o::::o     o::::o l::::l  l::::l e::::::eeeeeeeeeee   r:::::r            
M::::::M     MMMMM     M::::::Ma::::a    a:::::a      t:::::t    ttttttc::::::c     ccccccch:::::h     h:::::h  D:::::D    D:::::D e:::::::e                 t:::::t    tttttta::::a    a:::::a  i::::i  l::::l C:::::C       CCCCCCo::::o     o::::o  n::::n    n::::n      t:::::t    ttttttr:::::r            o::::o     o::::o l::::l  l::::l e:::::::e            r:::::r            
M::::::M               M::::::Ma::::a    a:::::a      t::::::tttt:::::tc:::::::cccccc:::::ch:::::h     h:::::hDDD:::::DDDDD:::::D  e::::::::e                t::::::tttt:::::ta::::a    a:::::a i::::::il::::::l C:::::CCCCCCCC::::Co:::::ooooo:::::o  n::::n    n::::n      t::::::tttt:::::tr:::::r            o:::::ooooo:::::ol::::::ll::::::le::::::::e           r:::::r            
M::::::M               M::::::Ma:::::aaaa::::::a      tt::::::::::::::t c:::::::::::::::::ch:::::h     h:::::hD:::::::::::::::DD    e::::::::eeeeeeee        tt::::::::::::::ta:::::aaaa::::::a i::::::il::::::l  CC:::::::::::::::Co:::::::::::::::o  n::::n    n::::n      tt::::::::::::::tr:::::r            o:::::::::::::::ol::::::ll::::::l e::::::::eeeeeeee   r:::::r            
M::::::M               M::::::M a::::::::::aa:::a       tt:::::::::::tt  cc:::::::::::::::ch:::::h     h:::::hD::::::::::::DDD       ee:::::::::::::e          tt:::::::::::tt a::::::::::aa:::ai::::::il::::::l    CCC::::::::::::C oo:::::::::::oo   n::::n    n::::n        tt:::::::::::ttr:::::r             oo:::::::::::oo l::::::ll::::::l  ee:::::::::::::e   r:::::r            
MMMMMMMM               MMMMMMMM  aaaaaaaaaa  aaaa         ttttttttttt      cccccccccccccccchhhhhhh     hhhhhhhDDDDDDDDDDDDD            eeeeeeeeeeeeee            ttttttttttt    aaaaaaaaaa  aaaaiiiiiiiillllllll       CCCCCCCCCCCCC   ooooooooooo     nnnnnn    nnnnnn          ttttttttttt  rrrrrrr               ooooooooooo   llllllllllllllll    eeeeeeeeeeeeee   rrrrrrr            
*/
.controller('MatchDetailController', function($scope, currentMatchService) {

	$scope.currentMatch = currentMatchService.currentMatch;
});