(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myHeader', [
    function () {
      return {
        restrict: 'E',
        templateUrl: 'component/header/header.html',
        scope: {
          headerTitle: '@headerTitle'
        },
        controller: ['$scope', '$location', 'serverConnexion', function ($scope, $location, serverConnexion) {
          var ressourceNameRetrieveCsv = 'CSV'
          $scope.csvUrl = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNameRetrieveCsv

        }]
      }
    }
  ])
})();// eslint-disable-line semi
