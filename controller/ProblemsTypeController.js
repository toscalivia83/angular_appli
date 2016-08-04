(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.controller('ProblemsTypeController', [
    '$scope',
    'ProblemsTypeService',
    'TimeService',
    function ($scope, ProblemsTypeService, TimeService) {
      var initialValue = 2
      $scope.problemType
      $scope.duration
      $scope.problemId
      $scope.problems = []

      ProblemsTypeService.getProblemsType().then(function (problems) {
        $scope.problems = problems
        $scope.problemIndex = initialValue
        $scope.problemType = $scope.problems[initialValue].typeProbleme
        $scope.duration = $scope.problems[initialValue].duree
      })
      .catch(function (err) {
        alert('Erreur')
        console.log(err)
      })

      $scope.setvalue = function (duration) {
        $scope.unit = TimeService.getTimeUnit(duration)
        $scope.displaytime = TimeService.computeDisplayTime(duration, $scope.unit)
      }

      $scope.oncreationtypeproblem = function () {
        var objectToSend = {
          typeProbleme: $scope.problemTypeCreation,
          duree: $scope.durationCreation
        }

        setTimeout(function () {
          ProblemsTypeService
          .createProblemType(objectToSend)
          .then(function (problems) {
            alert('Well inserted')
          })
          .catch(function (err) {
            alert('Erreur')
            console.log(err)
          })
        }, 5000)
      }
    }
  ])
})();// eslint-disable-line semi
