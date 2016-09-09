(function () {
  'use strict'
  var module = angular.module('ProblemsTest')
  module.filter('periodDate',
    function () {
      return function (array, minDate, maxDate) {
        var minTimestamp = new Date(minDate).getTime()
        var maxTimestamp = new Date(maxDate).getTime()
        var dayOffset = 86400000 // 24 * 3600 * 1000
        var arrayGenerated = array.filter(function (element) {
          if (isNaN(minTimestamp) && isNaN(maxTimestamp)) {
            return true
          }
          if (!isNaN(minTimestamp) && isNaN(maxTimestamp)) {
            return element.date >= minTimestamp
          }
          if (isNaN(minTimestamp) && !isNaN(maxTimestamp)) {
            return element.date <= (maxTimestamp + dayOffset) // add dayoffset to include the chosen date
          }
          if (!isNaN(minTimestamp) && !isNaN(maxTimestamp)) {
            return element.date >= minTimestamp && element.date <= (maxTimestamp + dayOffset)
          }
          return true
        })
        return arrayGenerated
      }
    })
})();// eslint-disable-line semi
