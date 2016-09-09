(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.controller('AllProblemsController', [
    '$scope',
    'ProblemsService',
    'TimeService',
    function ($scope, ProblemsService, TimeService) {
      $scope.problems = []

      ProblemsService.getAllProblems().then(function (problems) {
        $scope.problems = problems
      })
      .catch(function (err) {
        alert('Erreur')
        console.log(err)
      })

      $scope.ondelete = function (type) {
        var duree = TimeService.convertInMs(type.displaytime, type.unit)
        var objectToDelete = {
          id: type.id,
          typeProbleme: type.typeProbleme,
          duree: duree,
          commentaire: type.commentaire,
          user: type.user,
          numPosteDA: type.numPosteDA,
          adresseIPSopra: type.adresseIPSopra,
          date: type.date
        }
        $scope.start()
        setTimeout(function () {
          ProblemsService.deleteProblem(objectToDelete).then(function (typeProbleme) {
            $scope.stop()
            alert('Well deleted')
            var tableDeleted = _.remove($scope.problems, function (element) {
              if (objectToDelete.id === element.id) {
                return false
              } else {
                return true
              }
            })
            $scope.problems = tableDeleted
          })
          .catch(function (err) {
            $scope.stop()
            alert('Erreur')
            console.log(err)
          })
        }, 3000)
      }
    }
  ])
})();// eslint-disable-line semi
