(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.service('ProblemsTypeService', [
    '$q',
    '$http',
    'serverConnexion',
    function ($q, $http, serverConnexion) {
      debugger
      var ressourceNameGetProblems = 'problemsTypes'
      var apiUrlTypeProblems = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNameGetProblems
      this.getProblems = function () {
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
    }
  ])
})();// eslint-disable-line no-alert, quotes, semi
