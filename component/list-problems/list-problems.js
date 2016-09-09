(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myListOfProblems', [function () {
    return {
      restrict: 'E',
      scope: {
        problems: '=problems',
        ondelete: '=ondelete'
      },
      templateUrl: '/component/list-problems/list-problems.html',
      controller: ['$scope', function ($scope) {
        $scope.execDates = function () {
          $scope.myDate = new Date()
        }
      }]
    }
  }])
})();// eslint-disable-line semi
