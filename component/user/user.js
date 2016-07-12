(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myUser', [
    function () {
      return {
        restrict: 'E',
        scope: {
          user: '=enterUser'
        },
        templateUrl: '/component/user/user.html'
      }
    }
  ])
})();// eslint-disable-line semi
