(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.service('ProblemsTypeService', [
    '$q',
    '$http',
    'serverConnexion',
    function ($q, $http, serverConnexion) {
      var ressourceNameGetProblems = 'problemsTypes'
      var apiUrlTypeProblems = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNameGetProblems
      this.getProblemsType = function () {
        var deferred = $q.defer()
        $http.get(apiUrlTypeProblems)
          .then(function (httpInfo) {
            deferred.resolve(httpInfo.data)
          })
          .catch(function (err) {
            deferred.reject(err)
          })
        return deferred.promise
      }

      this.createProblemType = function (data) {
        var deferred = $q.defer()
        $http.post(apiUrlTypeProblems, data)
          .then(function (httpInfo) {
            deferred.resolve(httpInfo.data)
          })
          .catch(function (err) {
            deferred.reject(err)
          })
        return deferred.promise
      }

      this.deleteProblemType = function (data) {
        var deferred = $q.defer()
        var ProblemTypeId = data.id
        var urlDeleteProblemType = apiUrlTypeProblems + '/' + ProblemTypeId
        $http.delete(urlDeleteProblemType)
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
