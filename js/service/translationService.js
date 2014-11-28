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
      TEAM_DELETE: 'Del',
      //PLAYERS
      PLAYERS_ACTION_DESTRUCTIVE: 'Delete',
      PLAYERS_ACTION_TITLE: 'Are you sure?',
      PLAYERS_ACTION_CANCEL: 'Cancel',
      //PLAYERS - PLAYERS
      PLAYERS_TITLE: 'Players',
      PLAYERS_SLIDEACTION_DEL: 'Del',
      PLAYERS_SLIDEACTION_EDIT: 'Edit',
      //PLAYERS - MANAGE
      PLAYERS_MANAGE_TITLE: 'Player',
      PLAYERS_MANAGE_PLACEHOLDER_FIRSTNAME: 'Player Firstname',
      PLAYERS_MANAGE_PLACEHOLDER_LASTNAME: 'Player lastname',
      PLAYERS_MANAGE_BTN_ADD: 'Add Player',
      PLAYERS_MANAGE_BTN_UPDATE: 'Update Player',
      //PLAYERS - PLAYER
      PLAYERS_PLAYER_TITLE: 'Player',
      PLAYERS_PLAYER_LBL_MATCHES: 'Matches: ',
      PLAYERS_PLAYER_LBL_GOALS: 'Goals: ',
      PLAYERS_PLAYER_LBL_TEAMS: 'Teams:',
      //SOCCER
      SOCCER_STARTMATCH_POPUP_TITLE: 'Players',
      SOCCER_STARTMATCH_POPUP_TEMPLATE: 'Team:',
      //MATCH - NEWMATCH
      MATCH_NEWMATCH_TITLE: 'New Match',
      MATCH_NEWMATCH_LBL_TEAM: 'All periods have passed',
      MATCH_NEWMATCH_SELECT_CHOOSE_PLAYER: '-- choose player --',
      MATCH_NEWMATCH_PLACEHOLDER_OPPONENT: 'Opponent',
      MATCH_NEWMATCH_PLACEHOLDER_DATE: 'Date',
      MATCH_NEWMATCH_CHKBOX_HOME: 'Home?',
      MATCH_NEWMATCH_LBL_PERIOD: 'Period ',
      MATCH_NEWMATCH_PLACEHOLDER_PERIODLEN: 'Length',
      MATCH_NEWMATCH_LIST_SELECT_PLAYERS: 'Select the players:',
      MATCH_NEWMATCH_BTN_START: 'Start',
      //MATCH - SELECT PLAYER
      MATCH_MODAL_TITLE: 'Select Scoring Player:',
      //MATCH - MATCH
      MATCH_LBL_PERIOD: 'Period',
      MATCH_BTN_START: 'Start',
      MATCH_BTN_UPDATE: 'Update',
      MATCH_BTN_SAVE: 'Save',
      MATCH_BTN_HOME: 'Home',
      //MATCH - MATCH DETAIL
      MATCH_DETAIL_TITLE: 'Match Detail',
      MATCH_DETAIL_LBL_LINEUP: 'Lineup:',
      //MATCH - STARTPERIOD
      MATCH_STARTPERIOD_POPUP_TITLE: 'Periods',
      MATCH_STARTPERIOD_POPUP_TEMPLATE: 'All periods have passed',
      //MATCH - PERIODPASSED
      MATCH_PERIODPASSED_POPUP_TITLE: 'Periods',
      MATCH_PERIODPASSED_POPUP_TEMPLATE: 'Period is done. Progress to the next one!',
      //MATCH - EXIT
      MATCH_EXIT_POPUP_TITLE: 'Leave without saving?',
      MATCH_EXIT_POPUP_TEMPLATE: 'Are you sure you want to leave without saving the match?',
      //MATCH - SAVE
      MATCH_SAVE_POPUP_TITLE: 'Save',
      MATCH_SAVE_POPUP_TEMPLATE: 'Save Done!'
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
      TEAM_DELETE: 'Del',
      //PLAYERS
      PLAYERS_ACTION_DESTRUCTIVE: 'Verwijderen',
      PLAYERS_ACTION_TITLE: 'Zeker?',
      PLAYERS_ACTION_CANCEL: 'Cancel',
      //PLAYERS - PLAYERS
      PLAYERS_TITLE: 'Spelers',
      PLAYERS_SLIDEACTION_DEL: 'Del',
      PLAYERS_SLIDEACTION_EDIT: 'Edit',
      //PLAYERS - MANAGE
      PLAYERS_MANAGE_TITLE: 'Speler',
      PLAYERS_MANAGE_PLACEHOLDER_FIRSTNAME: 'Speler voornaam',
      PLAYERS_MANAGE_PLACEHOLDER_LASTNAME: 'Speler achternaam',
      PLAYERS_MANAGE_BTN_ADD: 'Speler toevoegen',
      PLAYERS_MANAGE_BTN_UPDATE: 'Speler aanpassen',
      //PLAYERS - PLAYER
      PLAYERS_PLAYER_TITLE: 'Speler',
      PLAYERS_PLAYER_LBL_MATCHES: 'Matches: ',
      PLAYERS_PLAYER_LBL_GOALS: 'Goals: ',
      PLAYERS_PLAYER_LBL_TEAMS: 'Teams:',
      //SOCCER
      SOCCER_STARTMATCH_POPUP_TITLE: 'Spelers',
      SOCCER_STARTMATCH_POPUP_TEMPLATE: 'Team:',
      //MATCH - NEWMATCH
      MATCH_NEWMATCH_TITLE: 'Nieuwe Match',
      MATCH_NEWMATCH_LBL_TEAM: 'Kies een team',
      MATCH_NEWMATCH_SELECT_CHOOSE_PLAYER: '-- Kies Speler --',
      MATCH_NEWMATCH_PLACEHOLDER_OPPONENT: 'Tegenstander',
      MATCH_NEWMATCH_PLACEHOLDER_DATE: 'Datum',
      MATCH_NEWMATCH_CHKBOX_HOME: 'Thuis?',
      MATCH_NEWMATCH_LBL_PERIOD: 'Periode ',
      MATCH_NEWMATCH_PLACEHOLDER_PERIODLEN: 'Lengte',
      MATCH_NEWMATCH_LIST_SELECT_PLAYERS: 'Kies de spelers:',
      MATCH_NEWMATCH_BTN_START: 'Start',
      //MATCH - SELECT PLAYER
      MATCH_MODAL_TITLE: 'Scorende speler:',
      //MATCH - MATCH
      MATCH_LBL_PERIOD: 'Periode',
      MATCH_BTN_START: 'Start',
      MATCH_BTN_UPDATE: 'Update',
      MATCH_BTN_SAVE: 'Bewaar',
      MATCH_BTN_HOME: 'Home',
      //MATCH - MATCH DETAIL
      MATCH_DETAIL_TITLE: 'Match Detail',
      MATCH_DETAIL_LBL_LINEUP: 'Opstelling:',
      //MATCH - STARTPERIOD
      MATCH_STARTPERIOD_POPUP_TITLE: 'Periodes',
      MATCH_STARTPERIOD_POPUP_TEMPLATE: 'Alle periodes zijn voorbij',
      //MATCH - PERIODPASSED
      MATCH_PERIODPASSED_POPUP_TITLE: 'Periodes',
      MATCH_PERIODPASSED_POPUP_TEMPLATE: 'Periode voorbij, kies Start om de volgende te beginnen',
      //MATCH - EXIT
      MATCH_EXIT_POPUP_TITLE: 'Wil je niet saven?',
      MATCH_EXIT_POPUP_TEMPLATE: 'Ben je zeker dat je wil gaan zonder te saven?',
      //MATCH - SAVE
      MATCH_SAVE_POPUP_TITLE: 'Bewaren',
      MATCH_SAVE_POPUP_TEMPLATE: 'Bewaren gelukt!'
  	});
  	$translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
})


.service('translationService', ['$translate', function($translate) {

   return {
      setPreferredLanguage: function(lang) {
        $translate.use(lang);
      }
   };
}]);