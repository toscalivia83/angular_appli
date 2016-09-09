(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myCreationInput', [
    function () {
      return {
        restrict: 'E',
        scope: {
          val: '=val',
          label: '@label',
          onclick: '=onclick',
          placeholder: '@placeholder'
        },
        templateUrl: '/component/creation-input/creation-input.html',
        controller: function ($scope) {
        }
      }
    }
  ])
})();// eslint-disable-line semi
