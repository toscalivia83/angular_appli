(function () {
  'use strict'
  var module = angular.module('ProblemsTest')
  module.service('CheckNumberService',
    function () {
      this.isNormalInteger = function (str) {
        return /^\\?(0|[1-9]\d*)$/.test(str)
      }
    })
})();// eslint-disable-line no-alert, quotes, semi
