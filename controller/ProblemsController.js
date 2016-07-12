(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.controller('ProblemsController', [
    '$scope',
    'ProblemsService',
    'ProblemsTypeService',
    function ($scope, ProblemsService, ProblemsTypeService) {
      var initialValue = 20
      $scope.problemType
      $scope.duration
      $scope.comment
      $scope.problemId
      $scope.comment
      $scope.user
      $scope.numPosteDa
      $scope.adresseIPSopra
      $scope.problems = []
      $scope.date = Date.now()

      ProblemsTypeService.getProblems().then(function (problems) {
        $scope.problems = problems
        $scope.problemIndex = initialValue
        $scope.problemType = $scope.problems[initialValue].typeProbleme
        $scope.duration = $scope.problems[initialValue].duree
        $scope.setduration($scope.duration)
        $scope.comment = ''
        $scope.user = ''
        $scope.numPosteDa = ''
        $scope.adresseIPSopra = '172.50.3.54'
      })
      .catch(function (err) {
        alert('Erreur')
        console.log(err)
      })

      $scope.ontypechange = function (type) {
        $scope.problemType = type.typeProbleme
        $scope.duration = type.duree
        $scope.setduration($scope.duration)
      }

      $scope.onsubmit = function () {
        var objectToSend = {
          typeProbleme: $scope.problemType,
          duree: $scope.duration,
          commentaire: $scope.comment,
          user: $scope.user,
          numPosteDA: $scope.numPosteDa,
          adresseIPSopra: $scope.adresseIPSopra,
          date: $scope.date
        }
        ProblemsService.createProblem(objectToSend)
        .then(function (problems) {
          alert('Well inserted')
        })
        .catch(function (err) {
          alert('Erreur')
          console.log(err)
        })
      }
    }
  ])
})();// eslint-disable-line semi
