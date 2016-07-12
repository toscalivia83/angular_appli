(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myComment', [
    function () {
      return {
        restrict: 'E',
        scope: {
          comment: '=enterNewComment'
        },
        templateUrl: '/component/comment/comment.html'
      }
    }
  ])
})();// eslint-disable-line semi
