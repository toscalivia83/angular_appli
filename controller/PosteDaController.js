(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.controller('PosteDaController', [
    '$scope',
    '$location',
    'PosteDaService',
    function ($scope, $location, PosteDaService) {
      $scope.postesDa = []
      $scope.numPosteDa

      PosteDaService.getPostesDa().then(function (posteDa) {
        $scope.postesDa = posteDa
      })
      .catch(function (err) {
        alert('Erreur')
        console.log(err)
      })

      $scope.oncreate = function () {
        var objectToSend = {
          numPosteDA: $scope.numPosteDa
        }
        if (objectToSend.numPosteDA === undefined) {
          alert('Veuillez remplir le numéro de poste Dassault')
          return
        }
        PosteDaService.createPosteDa(objectToSend)
        .then(function (posteDa) {
          alert('Well inserted')
          $scope.postesDa.push(objectToSend)
        })
        .catch(function (err) {
          alert('Erreur')
          console.log(err)
        })
      }

      $scope.ondelete = function (type) {
        var objectToDelete = {
          numPosteDA: type.numPosteDA,
          id: type.id
        }
        $scope.start()
        setTimeout(function () {
          PosteDaService.deletePosteDa(objectToDelete).then(function (posteDa) {
            $scope.stop()
            alert('Well deleted')
            location.reload()
          })
          .catch(function (err) {
            $scope.stop()
            alert('Erreur')
            console.log(err)
          })
        }, 3000)
      }

      $scope.goToRacePage = function () {
        $location.path('/poste-da')
      }
    }
  ])
})();// eslint-disable-line semi
