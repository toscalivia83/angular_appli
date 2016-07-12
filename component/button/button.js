(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myButton', [
    function () {
      return {
        restrict: 'E',
        scope: {
          onclick: '=onclick',
          label: '@btnLabel'
        },
        templateUrl: '/component/button/button.html'
      }
    }
  ])
})();// eslint-disable-line semi
