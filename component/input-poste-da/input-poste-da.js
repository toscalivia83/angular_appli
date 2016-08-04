(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myInputPosteDa', [
    function () {
      return {
        restrict: 'E',
        scope: {
          val: '=val',
          label: '@label',
          onclick: '=onclick'
        },
        templateUrl: '/component/input-poste-da/input-poste-da.html',
        controller: function ($scope) {
        }
      }
    }
  ])
})();// eslint-disable-line semi
