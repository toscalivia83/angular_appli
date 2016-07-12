(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.service('ProblemsService', [
    '$q',
    '$http',
    'serverConnexion',
    function ($q, $http, serverConnexion) {
      var ressourceNameCreateProblem = 'problems'
      var apiUrlCreateProblems = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNameCreateProblem

      this.createProblem = function (data) {
        var deferred = $q.defer()
        $http.post(apiUrlCreateProblems, data)
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
})();// eslint-disable-line no-alert, quotes, semi

