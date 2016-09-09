(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myCreationTypeProbleme', [
    function () {
      return {
        restrict: 'E',
        scope: {
          valduree: '=valduree',
          valtypeproblem: '=valtypeproblem',
          labelduree: '@labelduree',
          labeltypeproblem: '@labeltypeproblem',
          onclick: '=onclick',
          placeholderduree: '@placeholderduree',
          placeholdertypeproblem: '@placeholdertypeproblem',
          durationAdded: '=durationAdded',
          unitAdded: '=unitAdded',
          unit: '=unit'
        },
        templateUrl: '/component/creation-type-probleme/creation-type-probleme.html',
        controller: ['$scope', 'TimeService', function ($scope, TimeService) {
          $scope.retrievetime = function () {
            $scope.durationAdded = TimeService.convertInMs($scope.valduree, $scope.unit)
          }
        }]
      }
    }
  ])
})();// eslint-disable-line semi
