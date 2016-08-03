(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'view/home.html',
        controller: 'ProblemsController'
      })
      .when('/poste-da', {
        templateUrl: 'view/poste-da.html',
        controller: 'PosteDaController'
      })
      .when('/types-problems', {
        templateUrl: 'view/types-problems.html',
        controller: 'ProblemsTypeController'
      })
      .when('/all-problems', {
        templateUrl: 'view/all-problems.html',
        controller: 'AllProblemsController'
      })
      .otherwise({
        redirectTo: '/'
      })
  }])
})();// eslint-disable-line semi
