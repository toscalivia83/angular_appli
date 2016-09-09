(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myDuration', [
    function () {
      return {
        restrict: 'E',
        scope: {
          setvalue: '=setvalue',
          label: '@label',
          val: '=val',
          placeholder: '@placeholder',
          unit: '=unit'
        },
        controller: ['$scope', 'TimeService', function ($scope, TimeService) {
          $scope.unit = 's'

          $scope.computetime = function (value) {
            $scope.duration = TimeService.convertInMs(value, $scope.unit)
            return $scope.duration
          }

          $scope.checknumber = function (e) {
            if (!TimeService.keyisvalid(e.key)) {
              e.preventDefault()
            }
          }
        }],
        templateUrl: '/component/input-duration/input-duration.html'
      }
    }
  ])
})();// eslint-disable-line semi
