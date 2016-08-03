(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('fr', {
      'HOME-MESSAGE': '',

      'PROBLEMS-TITLE': 'Ajouter un problème',
      'PROBLEMS-TYPE-TITLE': 'Ajouter un type de problème',
      'POSTES-DA-TITLE': 'Gérer les postes Dassault',

      'PATH-POSTE-DA': '/poste-da',
      'PATH-PROBLEMS': '/',

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

      'SUCCESS-MESSAGE': 'Ajouté !',
      'ERROR-MESSAGE-VOID-POSTE': 'Veuillez remplir le numéro de poste Dassault',

      'FOOTER-MESSAGE': '© 2016 Repertoire de problèmes - Marion Gourlaouen'
    })

    $translateProvider.preferredLanguage('fr')
    $translateProvider.useSanitizeValueStrategy('escape')
  }])
})();// eslint-disable-line semi
