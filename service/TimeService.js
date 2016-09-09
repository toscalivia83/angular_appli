(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  var configUnitTime = {
    seconds: 's',
    minutes: 'm',
    hours: 'h'
  }

  module.service('TimeService',
    function () {
      this.getTimeUnit = function (duration) {
        var unit
        var invalidDuration = 'Duration is invalid'
        if (!duration) {
          throw invalidDuration
        }

        if (duration < 59999) {
          unit = configUnitTime.seconds
        } else if (duration < 3599999) {
          unit = configUnitTime.minutes
        } else {
          unit = configUnitTime.hours
        }
        return unit
      }

      this.computeDisplayTime = function (duration, unit) {
        var displaytime
        var unknowUnit = 'Unknown unit'
        switch (unit) {
          case configUnitTime.seconds :
            displaytime = Math.ceil(duration / 1000)
            break
          case configUnitTime.minutes :
            displaytime = Math.ceil(duration / 60000)
            break
          case configUnitTime.hours :
            displaytime = Math.ceil(duration / 3600000)
            break
          default :
            throw unknowUnit
        }
        return displaytime
      }

      this.convertInMs = function (displaytime, unit) {
        var duration
        var unknownUnit = 'Unknown unit'
        if (displaytime) {
          switch (unit) {
            case configUnitTime.seconds :
              duration = displaytime * 1000
              break
            case configUnitTime.minutes :
              duration = displaytime * 60000
              break
            case configUnitTime.hours :
              duration = displaytime * 3600000
              break
            default :
              throw unknownUnit
          }
        }
        return duration
      }

      this.keyisvalid = function (key) {
        var numbers = '0123456789'
        if (numbers.indexOf(key) !== -1 || key === 'Backspace') {
          return true
        } else {
          return false
        }
      }
    })
})();// eslint-disable-line semi
