(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.service('ConvertTableTimeService', [
    'TimeService',
    function (TimeService) {
      this.convertTableTime = function (problems) {
        var typeProblems = problems.map(function (problem) {
          var unit = TimeService.getTimeUnit(problem.duree)
          var displaytime = TimeService.computeDisplayTime(problem.duree, unit)
          var typeProblemeTimeFormatted = {
            typeProbleme: problems.typeProbleme,
            id: problems.id,
            displaytime: displaytime,
            unit: unit
          }
          typeProblemeTimeFormatted['typeProbleme'] = problem.typeProbleme
          typeProblemeTimeFormatted['id'] = problem.id
          typeProblemeTimeFormatted['displaytime'] = displaytime
          typeProblemeTimeFormatted['unit'] = unit
          return typeProblemeTimeFormatted
        })
        return typeProblems
      }

      this.convertTableTimeForAllProblems = function (problems) {
        var typeProblems = problems.map(function (problem) {
          var unit = TimeService.getTimeUnit(problem.duree)
          var displaytime = TimeService.computeDisplayTime(problem.duree, unit)
          var typeProblemeTimeFormatted = {
            typeProbleme: problems.typeProbleme,
            id: problems.id,
            displaytime: displaytime,
            unit: unit,
            commentaire: problems.commentaire,
            user: problems.user,
            numPosteDA: problems.numPosteDA,
            adresseIPSopra: problems.adresseIPSopra,
            date: problems.date
          }
          typeProblemeTimeFormatted['typeProbleme'] = problem.typeProbleme
          typeProblemeTimeFormatted['id'] = problem.id
          typeProblemeTimeFormatted['displaytime'] = displaytime
          typeProblemeTimeFormatted['unit'] = unit
          typeProblemeTimeFormatted['commentaire'] = problem.commentaire
          typeProblemeTimeFormatted['user'] = problem.user
          typeProblemeTimeFormatted['numPosteDA'] = problem.numPosteDA
          typeProblemeTimeFormatted['adresseIPSopra'] = problem.adresseIPSopra
          typeProblemeTimeFormatted['date'] = problem.date
          return typeProblemeTimeFormatted
        })
        return typeProblems
      }
    }
  ])
})();// eslint-disable-line semi
