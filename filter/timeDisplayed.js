(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.filter('timeDisplayed',
    ['TimeService', 'unitTimeInListProblemsDisplayed',
      function (TimeService, unitTimeInListProblemsDisplayed) {
        return function (element) {
          var timeTable = TimeService.getTimeAccordingToUnit(element)
          var displaytime = ''
          if (timeTable.hours) {
            var timeHour = timeTable.hours + unitTimeInListProblemsDisplayed.hours
            displaytime = displaytime + timeHour
          }
          if (timeTable.minutes) {
            var timeMinute = timeTable.minutes + unitTimeInListProblemsDisplayed.minutes
            displaytime = displaytime + timeMinute
          }
          if (timeTable.seconds) {
            var timeSecond = timeTable.seconds + unitTimeInListProblemsDisplayed.seconds
            displaytime = displaytime + timeSecond
          }
          return displaytime
        }
      }
    ]
  )
})();// eslint-disable-line semi
