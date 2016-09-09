(function () {
  'use strict'
  var module = angular.module('ProblemsTest')
  module.filter('timeDisplayed',
    ['TimeService',
      function (TimeService) {
        return function (element) {
          var unit = TimeService.getTimeUnit(element)
          var displaytime = TimeService.computeDisplayTime(element, unit)
          var entiretime = displaytime + unit
          return entiretime
        }
      }
    ]
  )
})();// eslint-disable-line semi
