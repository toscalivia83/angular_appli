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
      .otherwise({
        redirectTo: '/'
      })
  }])
})();// eslint-disable-line semi
