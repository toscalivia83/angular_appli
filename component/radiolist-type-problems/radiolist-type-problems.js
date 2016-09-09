(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myRadiolistTypeProblems', ['configMessages', function (configMessages) {
    return {
      restrict: 'E',
      scope: {
        problemsFormatted: '=problemsFormatted',
        ondelete: '=ondelete',
        itemId: '=idvalue'
      },
      templateUrl: '/component/radiolist-type-problems/radiolist-type-problems.html'
    }
  }])
})();// eslint-disable-line semi
