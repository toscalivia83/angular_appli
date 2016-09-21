(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.service('TimeService',
    ['unitTimeInProblemAdded', 'timeInMs', function (unitTimeInProblemAdded, timeInMs) {
      this.getTimeUnit = function (duration) {
        var unit
        var invalidDuration = 'Duration is invalid'
        if (!duration) {
          throw invalidDuration
        }

        if (duration < 59999) {
          unit = unitTimeInProblemAdded.seconds
        } else if (duration < 3599999) {
          unit = unitTimeInProblemAdded.minutes
        } else {
          unit = unitTimeInProblemAdded.hours
        }
        return unit
      }

      this.computeDisplayTime = function (duration, unit) {
        var displaytime
        var unknowUnit = 'Unknown unit'
        switch (unit) {
          case unitTimeInProblemAdded.seconds :
            displaytime = Math.ceil(duration / timeInMs.seconds)
            break
          case unitTimeInProblemAdded.minutes :
            displaytime = Math.ceil(duration / timeInMs.minutes)
            break
          case unitTimeInProblemAdded.hours :
            displaytime = Math.ceil(duration / timeInMs.hours)
            break
          default :
            throw unknowUnit
        }
        return displaytime
      }

      this.getTimeAccordingToUnit = function (duration) {
        var reste

        var hourDuration = Math.floor(duration / timeInMs.hours)
        reste = duration % timeInMs.hours

        var minuteDuration = Math.floor(reste / timeInMs.minutes)
        reste = reste % timeInMs.minutes

        var secondDuration = Math.round(reste / timeInMs.seconds)

        return {
          hours: hourDuration,
          minutes: minuteDuration,
          seconds: secondDuration
        }
      }

      this.convertInMs = function (displaytime, unit) {
        var duration
        var unknownUnit = 'Unknown unit'
        if (displaytime) {
          switch (unit) {
            case unitTimeInProblemAdded.seconds :
              duration = displaytime * timeInMs.seconds
              break
            case unitTimeInProblemAdded.minutes :
              duration = displaytime * timeInMs.minutes
              break
            case unitTimeInProblemAdded.hours :
              duration = displaytime * timeInMs.hours
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
    }])
})();// eslint-disable-line semi
