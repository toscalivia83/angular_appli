(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myDuree', [
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

          $scope.computetime = function () {
            $scope.duration = TimeService.convertInMs($scope.displaytime, $scope.unit)
            return $scope.duration
          }

          $scope.checknumber = function (e) {
            if (!TimeService.keyisvalid(e.key)) {
              e.preventDefault()
            }
          }
        }],
        templateUrl: '/component/type-duree/type-duree.html'
      }
    }
  ])
})();// eslint-disable-line semi
