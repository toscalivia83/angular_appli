(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('fr', {
      'HOME-MESSAGE': '',

      'PROBLEMS-TITLE': 'Ajouter un problème',
      'PROBLEMS-TYPE-TITLE': 'Gérer les types de problèmes',
      'POSTES-DA-TITLE': 'Gérer les postes',
      'ALL-PROBLEMS-TITLE': 'Affichage des problèmes entrés',

      'PROBLEMS-HEADER': 'PROBLEMES',
      'PROBLEMS-TYPE-HEADER': 'TYPES DE PROBLEMES',
      'POSTES-DA-HEADER': 'POSTES',
      'ALL-PROBLEMS-HEADER': 'LISTE DE PROBLEMES',
      'DOWNLOAD-CSV': 'DOWNLOAD CSV',


      'PATH-POSTE-DA': '/poste-da',
      'PATH-PROBLEMS': '/',

      'SECONDS-UNIT': 's',
      'MINUTES-UNIT': 'm',
      'HOURS-UNIT': 'h',

      'SECONDS-DURATION': 'secondes',
      'MINUTES-DURATION': 'minutes',
      'HOURS-DURATION': 'heures',

      'PROBLEM': 'Problème',
      'PROBLEM-USER': 'Utilisateur',
      'PROBLEM-NUM-POSTE-DA': 'Numéro de poste',
      'PROBLEM-ADRESS-IP': 'Adresse IP',
      'PROBLEM-DURATION': 'Durée',
      'PROBLEM-DURATION-BY-DEFAULT': 'Durée par défaut',
      'PROBLEM-COMMENT': 'Commentaires',
      'PROBLEM-TYPE': 'Type de problème',

      'POSTEDA-CREATION': 'Nouveau Poste Dassault',
      'DURATION-CREATION': 'Nouvelle durée',
      'TYPE-PROBLEME-CREATION': 'Nouveau type de problème',

      'MIN-DATE': 'Date min',
      'MAX-DATE': 'Date max',
      'MIN-DURATION': 'Durée min',
      'MAX-DURATION': 'Durée max',

      'BUTTON-SUBMIT': 'Valider',
      'BUTTON-CREATE': 'Créer',

      'SUCCESS-MESSAGE': 'Ajouté !',
      'ERROR-MESSAGE-VOID-POSTE': 'Veuillez remplir le numéro de poste Dassault',

      'FOOTER-MESSAGE': '© 2016 Repertoire de problèmes - Marion Gourlaouen'
    })

    $translateProvider.preferredLanguage('fr')
    $translateProvider.useSanitizeValueStrategy('escape')
  }])
})();// eslint-disable-line semi
