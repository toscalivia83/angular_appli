(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myProblems', ['configMessages', function (configMessages) {
    return {
      restrict: 'E',
      scope: {
        problems: '=problemsType',
        ondatachange: '=ondatachange',
        itemId: '=idvalue'
      },
      templateUrl: '/component/type-problem/type-problem.html'
    }
  }])
})();// eslint-disable-line semi
