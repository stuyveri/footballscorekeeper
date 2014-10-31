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
	this.periodStartTime = null;
	this.interval = null;
})

.run(function($rootScope, currentMatchService){
	$rootScope.doWrite = function(onEnd) {
		console.log("doWrite called");
	
		FileWriter.truncate(0);
		FileWriter.onwriteend = function(evt) {
			console.log("doWrite file truncated!");
			
			if( variables.savedData == null || variables.savedData == "" ) {
				variables.savedData = new SavedData();
			}
			addMatch( variables.savedData, currentMatchService.currentMatch );
			
			var data = angular.toJson(variables.savedData)
			console.log("data: " + data);

			FileWriter.write( data );
			FileWriter.onwriteend = onEnd;
		};
	}
})

.controller('HomeController', function($scope, currentMatchService) {
	$scope.teams = variables.savedData.teams;

	$("#barHeader").show();
})

.controller('SoccerController', function($scope, $location, currentMatchService) {
	$scope.today = new Date();
	$scope.periodCounter = 3;
	$scope.isHome = true;
	
	$scope.addPeriod = function() { 
		console.log("addPeriod called.");
		$("#newPeriod").before( "<div class='row' id='period" + $scope.periodCounter + "'><label class='item item-input'><span class='input-label'>Period " + $scope.periodCounter + "</span><input type='number' id='txtPeriodLen" + $scope.periodCounter + "' placeholder='Lengte'></label></div>" );
		$scope.periodCounter++;
	};
	
	$scope.startMatch = function() { 
		console.log("startMatch called.");
		
		//Fill match & teams
		currentMatchService.currentMatch = new Match( $("#txtTeam").val(), $("#txtDate").val(), $("#txtOpponent").val(),  $scope.isHome );
		
		$( "input[id*='txtPeriodLen']" ).each( function(index) { 
			var period = new Period( index, $( this ).val() );
			currentMatchService.currentMatch.pushPeriod( period );
		});
		
		console.log("match:" + angular.toJson(currentMatchService.currentMatch));
		
		$location.path('/startMatch');
	};
})

.controller('MatchController', function($scope, $location, $interval, $ionicPopup, currentMatchService) {

	$scope.currentMatch = currentMatchService.currentMatch;
	$scope.periodStartTime = currentMatchService.periodStartTime;
	$scope.periodCounter = -1;
	$scope.currentPeriod = null;
	$scope.minutes = '00';
	$scope.seconds = '00';

	//do not display header
	$("#barHeader").hide();
	
	$scope.addToTeam = function(val) { 
		console.log("addToTeam called.");
		$scope.currentMatch.teamScore = currentMatchService.currentMatch.teamScore + val;
		
		//add goal to period
		$scope.addGoal(true);
	};
	
	$scope.addToOpponent = function(val) { 
		console.log("addToOpponent called.");
		$scope.currentMatch.opponentScore = currentMatchService.currentMatch.opponentScore + val;
		
		//add goal to period
		$scope.addGoal(false);
	};
	
	$scope.addGoal = function(isHomeTeam) { 
		console.log("addGoal called.");
		var currentTime = new Date();		
		var milis = currentTime.valueOf() - $scope.periodStartTime.valueOf();
		var diffTime = new Date(milis);
		
		var goal = new Goal(diffTime.getMinutes(), currentMatchService.currentMatch.teamScore, currentMatchService.currentMatch.opponentScore, isHomeTeam);
		$scope.currentPeriod.pushGoal(goal);
		console.log("addGoal end: " + goal);
	};
	
	$scope.startPeriod = function() { 
		console.log("startPeriod called.");
		$scope.periodStartTime = new Date();
		
		
		if( ($scope.periodCounter + 1) < $scope.currentMatch.periods.length ) {
			$scope.periodCounter++;
			$scope.currentPeriod = $scope.currentMatch.periods[$scope.periodCounter];
		} else {
			$ionicPopup.alert({
				title: 'Periods',
				template: 'All periods have passed'
			});
		}
		
		$interval($scope.updateDisplay(), 3000, 50);
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
	        
			$ionicPopup.alert({
				title: 'Periods',
				template: 'Period is done. Progress to the next one!'
			});
	    }
	};
	
	$scope.saveData = function() {
		$scope.doWrite(
			function() {
				$ionicPopup.alert({
					title: 'Save',
					template: 'Save Done!'
			});
		});
	};
});