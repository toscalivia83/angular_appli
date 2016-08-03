(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myHeader', [
    function () {
      return {
        restrict: 'E',
        templateUrl: 'component/header/header.html',
        scope: {
          headerTitle: '@headerTitle',
          pathHeader: '@pathHeader'
        },
        controller: ['$scope', '$location', 'serverConnexion', function ($scope, $location, serverConnexion) {
          var ressourceNameRetrieveCsv = 'CSV'
          $scope.csvUrl = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNameRetrieveCsv
          $scope.valposteda = false
          $scope.valproblems = false
          $scope.valcsv = false
          if ($location.path() === '/poste-da') {
            $scope.valposteda = true
          }
            /* if ($location.path() === '/all-problems') {
              valallproblems = true
            }*/
          if ($location.path() === '/') {
            $scope.valproblems = true
          }
            /* if ($location.path() === '/all-problems') {
              valallproblems = true
            }*/
          // }
          // if($location.path)
        }],
        link: function ($scope, element, attributes) {

        }
      }
    }
  ])
})();// eslint-disable-line semi
