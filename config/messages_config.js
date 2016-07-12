(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  var configMessages = {
    problems: 'problems',
    typeProbleme: 'typeProbleme',
    repeatProblems: 'x in problems',
    valueProblem: '{{x.typeProblems}}',
    valueDuree: '{{x.duree}}'
  }

  module.constant('configMessages', configMessages)
})();// eslint-disable-line semi
