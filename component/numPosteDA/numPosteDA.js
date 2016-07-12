(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myNumPosteDa', [
    function () {
      return {
        restrict: 'E',
        scope: {
          numPosteDa: '=enterNumPosteda'
        },
        templateUrl: '/component/numPosteDA/numPosteDA.html'
      }
    }
  ])
})();// eslint-disable-line semi
