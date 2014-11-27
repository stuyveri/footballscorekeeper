angular.module('SoccerKeeperApp.playerController', ['ionic', 'SoccerKeeperApp.services'])
/*
PPPPPPPPPPPPPPPPP   lllllll                                                                                                       CCCCCCCCCCCCC                                            tttt                                              lllllll lllllll                                         
P::::::::::::::::P  l:::::l                                                                                                    CCC::::::::::::C                                         ttt:::t                                              l:::::l l:::::l                                         
P::::::PPPPPP:::::P l:::::l                                                                                                  CC:::::::::::::::C                                         t:::::t                                              l:::::l l:::::l                                         
PP:::::P     P:::::Pl:::::l                                                                                                 C:::::CCCCCCCC::::C                                         t:::::t                                              l:::::l l:::::l                                         
  P::::P     P:::::P l::::l   aaaaaaaaaaaaayyyyyyy           yyyyyyy eeeeeeeeeeee    rrrrr   rrrrrrrrr       ssssssssss    C:::::C       CCCCCC   ooooooooooo   nnnn  nnnnnnnn    ttttttt:::::ttttttt   rrrrr   rrrrrrrrr      ooooooooooo    l::::l  l::::l     eeeeeeeeeeee    rrrrr   rrrrrrrrr   
  P::::P     P:::::P l::::l   a::::::::::::ay:::::y         y:::::yee::::::::::::ee  r::::rrr:::::::::r    ss::::::::::s  C:::::C               oo:::::::::::oo n:::nn::::::::nn  t:::::::::::::::::t   r::::rrr:::::::::r   oo:::::::::::oo  l::::l  l::::l   ee::::::::::::ee  r::::rrr:::::::::r  
  P::::PPPPPP:::::P  l::::l   aaaaaaaaa:::::ay:::::y       y:::::ye::::::eeeee:::::eer:::::::::::::::::r ss:::::::::::::s C:::::C              o:::::::::::::::on::::::::::::::nn t:::::::::::::::::t   r:::::::::::::::::r o:::::::::::::::o l::::l  l::::l  e::::::eeeee:::::eer:::::::::::::::::r 
  P:::::::::::::PP   l::::l            a::::a y:::::y     y:::::ye::::::e     e:::::err::::::rrrrr::::::rs::::::ssss:::::sC:::::C              o:::::ooooo:::::onn:::::::::::::::ntttttt:::::::tttttt   rr::::::rrrrr::::::ro:::::ooooo:::::o l::::l  l::::l e::::::e     e:::::err::::::rrrrr::::::r
  P::::PPPPPPPPP     l::::l     aaaaaaa:::::a  y:::::y   y:::::y e:::::::eeeee::::::e r:::::r     r:::::r s:::::s  ssssss C:::::C              o::::o     o::::o  n:::::nnnn:::::n      t:::::t          r:::::r     r:::::ro::::o     o::::o l::::l  l::::l e:::::::eeeee::::::e r:::::r     r:::::r
  P::::P             l::::l   aa::::::::::::a   y:::::y y:::::y  e:::::::::::::::::e  r:::::r     rrrrrrr   s::::::s      C:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r     rrrrrrro::::o     o::::o l::::l  l::::l e:::::::::::::::::e  r:::::r     rrrrrrr
  P::::P             l::::l  a::::aaaa::::::a    y:::::y:::::y   e::::::eeeeeeeeeee   r:::::r                  s::::::s   C:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r            o::::o     o::::o l::::l  l::::l e::::::eeeeeeeeeee   r:::::r            
  P::::P             l::::l a::::a    a:::::a     y:::::::::y    e:::::::e            r:::::r            ssssss   s:::::s  C:::::C       CCCCCCo::::o     o::::o  n::::n    n::::n      t:::::t    ttttttr:::::r            o::::o     o::::o l::::l  l::::l e:::::::e            r:::::r            
PP::::::PP          l::::::la::::a    a:::::a      y:::::::y     e::::::::e           r:::::r            s:::::ssss::::::s  C:::::CCCCCCCC::::Co:::::ooooo:::::o  n::::n    n::::n      t::::::tttt:::::tr:::::r            o:::::ooooo:::::ol::::::ll::::::le::::::::e           r:::::r            
P::::::::P          l::::::la:::::aaaa::::::a       y:::::y       e::::::::eeeeeeee   r:::::r            s::::::::::::::s    CC:::::::::::::::Co:::::::::::::::o  n::::n    n::::n      tt::::::::::::::tr:::::r            o:::::::::::::::ol::::::ll::::::l e::::::::eeeeeeee   r:::::r            
P::::::::P          l::::::l a::::::::::aa:::a     y:::::y         ee:::::::::::::e   r:::::r             s:::::::::::ss       CCC::::::::::::C oo:::::::::::oo   n::::n    n::::n        tt:::::::::::ttr:::::r             oo:::::::::::oo l::::::ll::::::l  ee:::::::::::::e   r:::::r            
PPPPPPPPPP          llllllll  aaaaaaaaaa  aaaa    y:::::y            eeeeeeeeeeeeee   rrrrrrr              sssssssssss            CCCCCCCCCCCCC   ooooooooooo     nnnnnn    nnnnnn          ttttttttttt  rrrrrrr               ooooooooooo   llllllllllllllll    eeeeeeeeeeeeee   rrrrrrr            
                                                 y:::::y                                                                                                                                                                                                                                             
                                                y:::::y                                                                                                                                                                                                                                              
                                               y:::::y                                                                                                                                                                                                                                               
                                              y:::::y                                                                                                                                                                                                                                                
                                             yyyyyyy                                                                                                                                                                                                                                                 
*/
.controller('PlayersController', function($scope, $location, $ionicPopup, $ionicActionSheet, PlayerService) {

	$scope.players = PlayerService.players;
	
	$("#idNewMatch").hide();
	$("#idNewTeam").hide();
	$("#idNewPlayer").show();

	PlayerService.getAllPlayers(success, error);
	
	$scope.delete = function(player) {
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
				PlayerService.deletePlayer(player, successRefresh, error);
				return true;
			}
		});
	};
	
	$scope.edit = function(player) {
		$location.path('/manageplayer').search( player );
	};
	
	$scope.details = function(player) {
		$location.path('/player').search( player );
	};

	function success()  {
		$scope.$apply(
			function() {
		    	console.log("PlayersController.success called");
				$scope.players = PlayerService.players;

				console.log("doPlayers in success: " + angular.toJson($scope.players) );
				console.log("doPlayers in success2: " + angular.toJson(PlayerService.players) );
			}
		);
	};

	function successRefresh()  {
		$scope.$apply(
			function() {
		    	console.log("PlayersController.successRefresh called");

				PlayerService.getAllPlayers(success, error);
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
PPPPPPPPPPPPPPPPP   lllllll                                                                                      CCCCCCCCCCCCC                                            tttt                                              lllllll lllllll                                         
P::::::::::::::::P  l:::::l                                                                                   CCC::::::::::::C                                         ttt:::t                                              l:::::l l:::::l                                         
P::::::PPPPPP:::::P l:::::l                                                                                 CC:::::::::::::::C                                         t:::::t                                              l:::::l l:::::l                                         
PP:::::P     P:::::Pl:::::l                                                                                C:::::CCCCCCCC::::C                                         t:::::t                                              l:::::l l:::::l                                         
  P::::P     P:::::P l::::l   aaaaaaaaaaaaayyyyyyy           yyyyyyy eeeeeeeeeeee    rrrrr   rrrrrrrrr    C:::::C       CCCCCC   ooooooooooo   nnnn  nnnnnnnn    ttttttt:::::ttttttt   rrrrr   rrrrrrrrr      ooooooooooo    l::::l  l::::l     eeeeeeeeeeee    rrrrr   rrrrrrrrr   
  P::::P     P:::::P l::::l   a::::::::::::ay:::::y         y:::::yee::::::::::::ee  r::::rrr:::::::::r  C:::::C               oo:::::::::::oo n:::nn::::::::nn  t:::::::::::::::::t   r::::rrr:::::::::r   oo:::::::::::oo  l::::l  l::::l   ee::::::::::::ee  r::::rrr:::::::::r  
  P::::PPPPPP:::::P  l::::l   aaaaaaaaa:::::ay:::::y       y:::::ye::::::eeeee:::::eer:::::::::::::::::r C:::::C              o:::::::::::::::on::::::::::::::nn t:::::::::::::::::t   r:::::::::::::::::r o:::::::::::::::o l::::l  l::::l  e::::::eeeee:::::eer:::::::::::::::::r 
  P:::::::::::::PP   l::::l            a::::a y:::::y     y:::::ye::::::e     e:::::err::::::rrrrr::::::rC:::::C              o:::::ooooo:::::onn:::::::::::::::ntttttt:::::::tttttt   rr::::::rrrrr::::::ro:::::ooooo:::::o l::::l  l::::l e::::::e     e:::::err::::::rrrrr::::::r
  P::::PPPPPPPPP     l::::l     aaaaaaa:::::a  y:::::y   y:::::y e:::::::eeeee::::::e r:::::r     r:::::rC:::::C              o::::o     o::::o  n:::::nnnn:::::n      t:::::t          r:::::r     r:::::ro::::o     o::::o l::::l  l::::l e:::::::eeeee::::::e r:::::r     r:::::r
  P::::P             l::::l   aa::::::::::::a   y:::::y y:::::y  e:::::::::::::::::e  r:::::r     rrrrrrrC:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r     rrrrrrro::::o     o::::o l::::l  l::::l e:::::::::::::::::e  r:::::r     rrrrrrr
  P::::P             l::::l  a::::aaaa::::::a    y:::::y:::::y   e::::::eeeeeeeeeee   r:::::r            C:::::C              o::::o     o::::o  n::::n    n::::n      t:::::t          r:::::r            o::::o     o::::o l::::l  l::::l e::::::eeeeeeeeeee   r:::::r            
  P::::P             l::::l a::::a    a:::::a     y:::::::::y    e:::::::e            r:::::r             C:::::C       CCCCCCo::::o     o::::o  n::::n    n::::n      t:::::t    ttttttr:::::r            o::::o     o::::o l::::l  l::::l e:::::::e            r:::::r            
PP::::::PP          l::::::la::::a    a:::::a      y:::::::y     e::::::::e           r:::::r              C:::::CCCCCCCC::::Co:::::ooooo:::::o  n::::n    n::::n      t::::::tttt:::::tr:::::r            o:::::ooooo:::::ol::::::ll::::::le::::::::e           r:::::r            
P::::::::P          l::::::la:::::aaaa::::::a       y:::::y       e::::::::eeeeeeee   r:::::r               CC:::::::::::::::Co:::::::::::::::o  n::::n    n::::n      tt::::::::::::::tr:::::r            o:::::::::::::::ol::::::ll::::::l e::::::::eeeeeeee   r:::::r            
P::::::::P          l::::::l a::::::::::aa:::a     y:::::y         ee:::::::::::::e   r:::::r                 CCC::::::::::::C oo:::::::::::oo   n::::n    n::::n        tt:::::::::::ttr:::::r             oo:::::::::::oo l::::::ll::::::l  ee:::::::::::::e   r:::::r            
PPPPPPPPPP          llllllll  aaaaaaaaaa  aaaa    y:::::y            eeeeeeeeeeeeee   rrrrrrr                    CCCCCCCCCCCCC   ooooooooooo     nnnnnn    nnnnnn          ttttttttttt  rrrrrrr               ooooooooooo   llllllllllllllll    eeeeeeeeeeeeee   rrrrrrr            
                                                 y:::::y                                                                                                                                                                                                                            
                                                y:::::y                                                                                                                                                                                                                             
                                               y:::::y                                                                                                                                                                                                                              
                                              y:::::y                                                                                                                                                                                                                               
                                             yyyyyyy                                                                                                                                                                                                                                
*/
.controller('PlayerController', function($scope, $location, $ionicPopup, $q, PlayerService, TeamService) {
	$scope.firstName;
	$scope.lastName;
	$scope.player = $location.search();
	$scope.teams;

	if( $scope.player != null && $scope.player.firstname != null ) {
		$scope.firstName = $scope.player.firstname;
		$scope.lastName = $scope.player.lastname;

		$("#btnAddPlayer").hide();
		$("#btnUpdatePlayer").show();

		TeamService.getTeamsForPlayer($scope.player, successRefresh, error);
		
		PlayerService.getNrOfMatches($scope.player, successNrOfMatches, error);
		PlayerService.getNrOfGoals($scope.player, successNrOfGoals, error);
	} else {
		$("#btnAddPlayer").show();
		$("#btnUpdatePlayer").hide();
	}
	
	$scope.addPlayer = function() {
		PlayerService.insertPlayer(new Player(-1, $scope.firstName, $scope.lastName), success, error);
	};
	
	$scope.updatePlayer = function(player) {
		$scope.player.firstname = $scope.firstName;
		$scope.player.lastname = $scope.lastName;
		PlayerService.updatePlayer($scope.player, success, error);
	};
	
	$scope.goToTeam = function(team) {
		$location.path('/team').search( team );
	};

	function success()  {
		$scope.$apply(
			function() {
		    	console.log("PlayerController.success called");
				
				$location.path('/players');
			}
		);
	};

	function successNrOfMatches()  {
		$scope.$apply(
			function() {
		    	console.log("PlayerController.successNrOfMatches called");				
				$scope.player.nrOfMatches = variables.playerNrOfMatches;
			}
		);
	};

	function successNrOfGoals()  {
		$scope.$apply(
			function() {
		    	console.log("PlayerController.successNrOfGoals called: " + variables.playerNrOfGoals);				
				$scope.player.nrOfGoals = variables.playerNrOfGoals;
			}
		);
	};

	function successRefresh()  {
		$scope.$apply(
			function() {
		    	console.log("PlayerController.successRefresh called");

				$scope.teams = TeamService.teams;
			}
		);
	};

	function error(err) {
    	console.log("Error processing SQL: " + angular.toJson(err));
		$ionicPopup.alert({
			title: 'Players',
			template: 'Database Error: ' + angular.toJson(err)
		});
	};
});