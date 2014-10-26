angular.module('SoccerKeeperApp', ['ionic'])
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
  });
})

.service('currentMatchService', function(){
	this.currentMatch = null;
})

.controller('SoccerController', function($scope, $location, currentMatchService) {
	$scope.today = new Date();
	$scope.periodCounter = 3;
	
	$scope.addPeriod = function() { 
		console.log("addPeriod called.");
		$("#newPeriod").before( "<div class='row' id='period" + $scope.periodCounter + "'><label class='item item-input'><span class='input-label'>Period " + $scope.periodCounter + "</span><input type='number' id='txtPeriodLen" + $scope.periodCounter + "' placeholder='Lengte'></label></div>" );
		$scope.periodCounter++;
	};
	
	$scope.startMatch = function() { 
		console.log("startMatch called.");
		
		//Fill match & teams
		currentMatchService.currentMatch = new Match( $("#txtTeam").val(), $("#txtDate").val(), $("#txtOpponent").val(),  $("#chkHome").val() );
		
		$( "input[id*='txtPeriodLen']" ).each( function(index) { 
			var period = new Period( index, $( this ).val() );
			currentMatchService.currentMatch.pushPeriod( period );
		});
		
		teams.addTeam( $("#txtTeam").val() );
		
		console.log("match:" + angular.toJson(currentMatchService.currentMatch));
		console.log("teams:" + angular.toJson(teams));
		
		$location.path('/startMatch');
	};
})

.controller('MatchController', function($scope, $location, currentMatchService) {

	$scope.currentMatch = currentMatchService.currentMatch;
	
	$scope.addToTeam = function(val) { 
		console.log("addToTeam called.");
		$scope.currentMatch.teamScore = currentMatchService.currentMatch.teamScore + val;
	};
	
	$scope.addToOpponent = function(val) { 
		console.log("addToOpponent called.");
		$scope.currentMatch.opponentScore = currentMatchService.currentMatch.opponentScore + val;
	};
});