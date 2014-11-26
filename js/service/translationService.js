angular.module('SoccerKeeperApp.translationService', ['pascalprecht.translate'])
.config(function($translateProvider) {
	 $translateProvider.translations('en', {
		  HOME_TITLE: 'Score Keeper',
    	IS_HOME: 'Home',
    	IS_OUT: 'Out',
      //SETTINGS
      SETTINGS_TITLE: 'Configuratie',
      DO_TWITTER: 'Send Twitter Messages?',
      LANG_ENGLISH: 'English',
      LANG_DUTCH: 'Dutch',
      //TEAM - TEAMS
      TEAMS_TITLE: 'Teams',
      TEAMS_EDIT: 'Edit',
      TEAMS_DELETE: 'Del',
      TEAMS_ACTION_DESTRUCTIVE: 'Delete',
      TEAMS_ACTION_TITLE: 'Are you sure?',
      TEAMS_ACTION_CANCEL: 'Cancel',
      //TEAM - MANAGE TEAM
      MANAGE_TEAM_TITLE: 'Manage Team',
      MANAGE_TEAM_BUTTON_ADD: 'Add Team',
      MANAGE_TEAM_BUTTON_UPDATE: 'Update Team',
      DELETE_PLAYER_ACTION_DESTRUCTIVE: 'Delete',
      DELETE_PLAYER_ACTION_TITLE: 'Are you sure?',
      DELETE_PLAYER_ACTION_CANCEL: 'Cancel',
      //TEAM - TEAM
      TEAM_TITLE: 'Team',
      TEAM_RIBBON_MATCHES: 'Matches: ',
      TEAM_RIBBON_GOALS: 'Goals (for/against): ',
      TEAM_RIBBON_TOPSCORER: 'Topscorer: ',
      TEAM_LIST_PLAYERS: 'Players:',
      TEAM_SELECT_CHOOSE_PLAYER: '-- choose player --',
      TEAM_BUTTON_ADD_PLAYER: 'Add Player',
      TEAM_RIBBON_PLAYERS: 'Players:',
      TEAM_DELETE: 'Del'
  	});
  	$translateProvider.translations('nl', {
      HOME_TITLE: 'Score Keeper',
      IS_HOME: 'Thuis',
      IS_OUT: 'Uit',
      //SETTINGS
      SETTINGS_TITLE: 'Configuratie',
      DO_TWITTER: 'Twitter Berichten Versturen?',
      LANG_ENGLISH: 'Engels',
      LANG_DUTCH: 'Nederlands',
      //TEAM - TEAMS
      TEAMS_TITLE: 'Teams',
      TEAMS_EDIT: 'Edit',
      TEAMS_DELETE: 'Del',
      TEAMS_ACTION_DESTRUCTIVE: 'Verwijderen',
      TEAMS_ACTION_TITLE: 'Zeker?',
      TEAMS_ACTION_CANCEL: 'Cancel',
      //TEAM - MANAGE TEAM
      MANAGE_TEAM_TITLE: 'Beheer Team',
      MANAGE_TEAM_BUTTON_ADD: 'Voeg Toe',
      MANAGE_TEAM_BUTTON_UPDATE: 'Team Aanpassen',
      DELETE_PLAYER_ACTION_DESTRUCTIVE: 'Verwijderen',
      DELETE_PLAYER_ACTION_TITLE: 'Zeker?',
      DELETE_PLAYER_ACTION_CANCEL: 'Cancel',
      //TEAM - TEAM
      TEAM_TITLE: 'Team',
      TEAM_RIBBON_MATCHES: 'Matches: ',
      TEAM_RIBBON_GOALS: 'Goals (voor/tegen): ',
      TEAM_RIBBON_TOPSCORER: 'Topscorer: ',
      TEAM_LIST_PLAYERS: 'Spelers:',
      TEAM_SELECT_CHOOSE_PLAYER: '-- Kies Speler --',
      TEAM_BUTTON_ADD_PLAYER: 'Speler Toevoegen',
      TEAM_RIBBON_PLAYERS: 'Spelers:',
      TEAM_DELETE: 'Del'
  	});
  	$translateProvider.preferredLanguage('nl');
    $translateProvider.fallbackLanguage('en');
});