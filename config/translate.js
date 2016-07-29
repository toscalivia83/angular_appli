(function() {
  'use strict';
  var module = angular.module('ProblemsTest');

  module.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('fr', {
      'HOME-MESSAGE': "",

      'PROBLEMS-TITLE': "Ajouter un problème",
      'POSTES-DA-TITLE': "Gérer les postes Dassault",

      'SECONDS-UNIT': 's',
      'MINUTES-UNIT': 'm',
      'HOURS-UNIT': 'h',

      'SECONDS-DURATION': 'secondes',
      'MINUTES-DURATION': 'minutes',
      'HOURS-DURATION': 'heures',

      'PROBLEM-USER': 'User',
      'PROBLEM-NUM-POSTE-DA': 'Numéro de poste Dassault',
      'PROBLEM-ADRESS-IP': 'Adresse IP',
      'PROBLEM-DURATION': 'Durée',
      'PROBLEM-COMMENT': 'Commentaires',

      'FOOTER-MESSAGE': "© 2016 Repertoire de problèmes - Marion Gourlaouen"
    });

    $translateProvider.preferredLanguage('fr');
    $translateProvider.useSanitizeValueStrategy('escape');
  }]);

})();
