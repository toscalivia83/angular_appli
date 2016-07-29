(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myDuration', [
    function () {
      return {
        restrict: 'E',
        scope: {
          duration: '=problemsTypeDuree',
          setvalue: '=setvalue'
        },
        controller: ['$scope', 'TimeService', function ($scope, TimeService) {
          $scope.setvalue = function (duration) {
            $scope.unit = TimeService.getTimeUnit(duration)
            $scope.displaytime = TimeService.computeDisplayTime(duration, $scope.unit)
          }

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
