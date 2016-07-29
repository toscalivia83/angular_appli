(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myRadiolistProblems', ['configMessages', function (configMessages) {
    return {
      restrict: 'E',
      scope: {
        problems: '=problemsType',
        ondatachange: '=ondatachange',
        itemId: '=idvalue'
      },
      templateUrl: '/component/radiolist-problems/radiolist-problems.html'
    }
  }])
})();// eslint-disable-line semi
