(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.service('CsvService', [
    '$q',
    '$http',
    'serverConnexion',
    function ($q, $http, serverConnexion) {
      var ressourceNameRetrieveCsv = 'CSV'
      var apiUrlProblems = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNameRetrieveCsv
      this.retrieveCsv = function () {
        var deferred = $q.defer()
        $http.get(apiUrlProblems)
          .then(function (httpInfo) {
            deferred.resolve(httpInfo)
          })
          .catch(function (err) {
            deferred.reject(err)
          })
        return deferred.promise
      }
    }
  ])
})();// eslint-disable-line semi
