(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.controller('ProblemsController', [
    '$scope',
    'ProblemsService',
    'ProblemsTypeService',
    'PosteDaService',
    'TimeService',
    function ($scope, ProblemsService, ProblemsTypeService, PosteDaService, TimeService) {
      var initialValue = 2
      $scope.problemType
      $scope.duration
      $scope.comment
      $scope.problemId
      $scope.comment
      $scope.user
      $scope.numPosteDa
      $scope.adresseIPSopra
      $scope.postesDa = []
      $scope.problems = []
      $scope.date = Date.now()

      ProblemsTypeService.getProblemsType().then(function (problems) {
        $scope.problems = problems
        $scope.problemIndex = initialValue
        $scope.problemType = $scope.problems[initialValue].typeProbleme
        $scope.duration = $scope.problems[initialValue].duree
        $scope.setvalue($scope.duration)
        $scope.comment = ''
        $scope.user = ''
        $scope.numPosteDa = ''
        $scope.adresseIPSopra = '172.50.3.54'

        return PosteDaService.getPostesDa()
      })
      .catch(function (err) {
        alert('Erreur')
        console.log(err)
      }).then(function (posteDa) {
        $scope.postesDa = posteDa
      })
      .catch(function (err) {
        alert('Erreur')
        console.log(err)
      })

      $scope.setvalue = function (duration) {
        $scope.unit = TimeService.getTimeUnit(duration)
        $scope.displaytime = TimeService.computeDisplayTime(duration, $scope.unit)
      }

      $scope.computetime = function (value) {
        $scope.duration = TimeService.convertInMs(value, $scope.unit)
        return $scope.duration
      }

      $scope.ontypechange = function (type) {
        $scope.problemType = type.typeProbleme
        $scope.duration = type.duree
        $scope.setvalue($scope.duration)
      }

      $scope.onsubmit = function () {
        var duration = TimeService.convertInMs($scope.displaytime, $scope.unit)
        var objectToSend = {
          typeProbleme: $scope.problemType,
          duree: duration,
          commentaire: $scope.comment,
          user: $scope.user,
          numPosteDA: ($scope.numPosteDa).numPosteDA,
          adresseIPSopra: $scope.adresseIPSopra,
          date: $scope.date
        }
        $scope.start()
        setTimeout(function () {
          ProblemsService
          .createProblem(objectToSend)
          .then(function (problems) {
            $scope.stop()
            alert('Well inserted')
          })
          .catch(function (err) {
            $scope.stop()
            alert('Erreur')
            console.log(err)
          })
        }, 5000)
      }
    }
  ])
})();// eslint-disable-line semi
