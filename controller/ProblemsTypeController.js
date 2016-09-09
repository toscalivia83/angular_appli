(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.controller('ProblemsTypeController', [
    '$scope',
    'ProblemsTypeService',
    'TimeService',
    'ConvertTableTimeService',
    function ($scope, ProblemsTypeService, TimeService, ConvertTableTimeService) {
      $scope.duration
      $scope.dureeAdded
      $scope.typeProblemeAdded
      $scope.durationAdded
      $scope.unitAdded
      $scope.problems = []
      $scope.problemsFormatted = []

      ProblemsTypeService.getProblemsType().then(function (problems) {
        $scope.problems = problems
        $scope.problemsFormatted = ConvertTableTimeService.convertTableTime(problems)
      })
      .catch(function (err) {
        alert('Erreur')
        console.log(err)
      })

      $scope.setvalue = function (duration) {
        $scope.unit = TimeService.getTimeUnit(duration)
        $scope.displaytime = TimeService.computeDisplayTime(duration, $scope.unit)
      }

      $scope.ondelete = function (type) {
        var objectToDelete = {
          id: type.id,
          typeProbleme: type.typeProbleme,
          duree: type.duree
        }
        $scope.start()
        setTimeout(function () {
          ProblemsTypeService.deleteProblemType(objectToDelete).then(function (typeProbleme) {
            $scope.stop()
            alert('Well deleted')
            var tableDeleted = _.remove($scope.problemsFormatted, function (element) {
              if (objectToDelete.id === element.id) {
                return false
              } else {
                return true
              }
            })
            $scope.problemsFormatted = tableDeleted
          })
          .catch(function (err) {
            $scope.stop()
            alert('Erreur')
            console.log(err)
          })
        }, 3000)
      }

      $scope.onclick = function () {
        $scope.durationAdded = TimeService.convertInMs($scope.dureeAdded, $scope.unitAdded)
        var objectToSend = {
          typeProbleme: $scope.typeProblemeAdded,
          duree: $scope.durationAdded
        }
        var objectToSendComputedTime = {
          typeProbleme: $scope.typeProblemeAdded,
          displaytime: $scope.dureeAdded,
          unit: $scope.unitAdded
        }
        ProblemsTypeService
        .createProblemType(objectToSend)
        .then(function (problems) {
          alert('Well inserted')
          objectToSend.id = problems._id
          objectToSendComputedTime.id = problems._id
          $scope.problems.push(objectToSend)
          $scope.problemsFormatted.push(objectToSendComputedTime)
        })
        .catch(function (err) {
          alert('Erreur')
          console.log(err)
        })
      }
    }
  ])
})();// eslint-disable-line semi
