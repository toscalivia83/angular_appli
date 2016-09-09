(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.service('ProblemsService', [
    '$q',
    '$http',
    'serverConnexion',
    function ($q, $http, serverConnexion) {
      var ressourceNameCreateProblem = 'problems'
      var apiUrlProblems = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNameCreateProblem
      this.createProblem = function (data) {
        var deferred = $q.defer()
        $http.post(apiUrlProblems, data)
          .then(function (httpInfo) {
            deferred.resolve(httpInfo.data)
          })
          .catch(function (err) {
            deferred.reject(err)
          })
        return deferred.promise
      }

      this.getAllProblems = function () {
        var deferred = $q.defer()
        $http.get(apiUrlProblems)
          .then(function (httpInfo) {
            deferred.resolve(httpInfo.data)
          })
          .catch(function (err) {
            deferred.reject(err)
          })
        return deferred.promise
      }

      this.deleteProblem = function (data) {
        var deferred = $q.defer()
        var ProblemId = data.id
        var urlDeleteProblem = apiUrlProblems + '/' + ProblemId
        $http.delete(urlDeleteProblem)
          .then(function (httpInfo) {
            deferred.resolve(httpInfo.data)
          })
          .catch(function (err) {
            deferred.reject(err)
          })
        return deferred.promise
      }
    }
  ])
})();// eslint-disable-line semi
