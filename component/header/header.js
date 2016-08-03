(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myHeader', [
    function () {
      return {
        restrict: 'E',
        templateUrl: 'component/header/header.html',
        scope: {
          headerTitle: '@headerTitle',
          firstButtonLabel: '@firstButtonLabel',
          secondButtonLabel: '@secondButtonLabel',
          thirdButtonLabel: '@thirdButtonLabel',
          pathHeader: '@pathHeader'
        },
        controller: ['$scope', '$location', 'serverConnexion', function ($scope, $location, serverConnexion) {
          var ressourceNameRetrieveCsv = 'CSV'
          $scope.csvUrl = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNameRetrieveCsv
          //$scope.val = true
          /*$scope.changepage = function () {
            console.log($location)
            $location.path($scope.pathHeader)
            debugger
            if($scope.pathHeader === '/'){
              $scope.val === true
            }
            else{
              $scope.val === false
            }
          }*/
          $scope.valposteda = false
          $scope.valproblems = false
         // var vallistproblems = ''
          // var valallproblems = ''
          // $scope.setcolor = function(){
            // debugger
          if ($location.path() === '/poste-da') {
            $scope.valposteda = true
          }
            /* if ($location.path() === '/all-problems') {
              valallproblems = true
            }*/
          if ($location.path() === '/') {
            $scope.valproblems = true
          }
            /* if ($location.path() === '/all-problems') {
              valallproblems = true
            }*/
           // console.log(vallistproblems)
          // console.log(valallproblems)
          // }
          // if($location.path)
        }],
        link: function ($scope, element, attributes) {

        }
      }
    }
  ])
})();// eslint-disable-line semi
