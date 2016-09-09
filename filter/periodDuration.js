(function () {
  'use strict'
  var module = angular.module('ProblemsTest')
  module.filter('periodDuration',
    ['TimeService', function (TimeService) {
      return function (array, minDuration, maxDuration, unitMin, unitMax) {
        var displaytimemin = TimeService.convertInMs(minDuration, unitMin)
        var displaytimemax = TimeService.convertInMs(maxDuration, unitMax)
        var arrayGenerated = array.filter(function (element) {
          if (isNaN(displaytimemin) && isNaN(displaytimemax)) {
            return true
          }
          if (!isNaN(displaytimemin) && isNaN(displaytimemax)) {
            return element.duree >= displaytimemin
          }
          if (isNaN(displaytimemin) && !isNaN(displaytimemax)) {
            return element.duree <= displaytimemax
          }
          if (!isNaN(displaytimemin) && !isNaN(displaytimemax)) {
            return element.duree >= displaytimemin && element.duree <= displaytimemax
          }
          return true
        })
        return arrayGenerated
      }
    }]
  )
})();// eslint-disable-line semi
