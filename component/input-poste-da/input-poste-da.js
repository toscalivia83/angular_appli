(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myInputPosteDa', [
    function () {
      return {
        restrict: 'E',
        scope: {
          val: '=val',
          fct: '=fct'
        },
        templateUrl: '/component/input-poste-da/input-poste-da.html'
      }
    }
  ])
})();// eslint-disable-line semi
