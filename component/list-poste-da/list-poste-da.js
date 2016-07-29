(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myPostesDa', [function () {
    return {
      restrict: 'E',
      scope: {
        postesDa: '=postesDa',
        ondelete: '=ondelete',
        itemId: '=idvalue'
      },
      templateUrl: '/component/list-poste-da/list-poste-da.html'
    }
  }])
})();// eslint-disable-line semi
