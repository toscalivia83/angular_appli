(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  var configConnexionServer = {
    port: '8080',
    server: 'localhost'
  }

  const configUnitTimeInProblemAdded = {
    seconds: 's',
    minutes: 'm',
    hours: 'h'
  }

  const configUnitTimeInListProblemsDisplayed = {
    seconds: 's',
    minutes: 'm',
    hours: 'h'
  }

  const timeInMs = {
    seconds: 1000,
    minutes: 60000,
    hours: 3600000
  }

  module.constant('serverConnexion', configConnexionServer)
  module.constant('unitTimeInProblemAdded', configUnitTimeInProblemAdded)
  module.constant('unitTimeInListProblemsDisplayed', configUnitTimeInListProblemsDisplayed)
  module.constant('timeInMs', timeInMs)
})();// eslint-disable-line semi
