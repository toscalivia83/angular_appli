(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myAdresseIpSopra', [
    function () {
      return {
        restrict: 'E',
        scope: {
          adresseIPSopra: '=enterAdressIpsopra'
        },
        templateUrl: '/component/adresseIPSopra/adresseIPSopra.html'
      }
    }
  ])
})();// eslint-disable-line semi
