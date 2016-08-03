(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myComboboxPosteDa', [function () {
    return {
      restrict: 'E',
      scope: {
        postesDa: '=postesDa',
        label: '@label',
        val: '=val'
      },
      templateUrl: '/component/combobox/combobox.html'
    }
  }])
})();// eslint-disable-line semi

