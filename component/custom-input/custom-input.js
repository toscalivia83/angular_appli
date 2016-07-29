(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myCustomInput', [
    function () {
      return {
        restrict: 'E',
        scope: {
          val: '=val',
          label: '@label',
          fct: '=fct'
        },
        templateUrl: '/component/custom-input/custom-input.html'
      }
    }
  ])
})();// eslint-disable-line semi
