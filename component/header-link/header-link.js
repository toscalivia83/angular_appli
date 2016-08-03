(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myHeaderLink', [
    function () {
      return {
        restrict: 'E',
        scope: {
          val: '=val',
          label: '@label',
          url: '@url'
        },
        templateUrl: '/component/header-link/header-link.html'
      }
    }
  ])
})();// eslint-disable-line semi
