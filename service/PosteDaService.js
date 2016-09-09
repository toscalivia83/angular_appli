(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.service('PosteDaService', [
    '$q',
    '$http',
    'serverConnexion',
    function ($q, $http, serverConnexion) {
      var ressourceNamePosteDa = 'postesDA'
      var apiUrlPosteDa = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNamePosteDa

      this.getPostesDa = function () {
        var deferred = $q.defer()
        $http.get(apiUrlPosteDa)
          .then(function (httpInfo) {
            deferred.resolve(httpInfo.data)
          })
          .catch(function (err) {
            deferred.reject(err)
          })
        return deferred.promise
      }

      this.createPosteDa = function (data) {
        var deferred = $q.defer()
        $http.post(apiUrlPosteDa, data)
          .then(function (httpInfo) {
            deferred.resolve(httpInfo.data)
          })
          .catch(function (err) {
            deferred.reject(err)
          })
        return deferred.promise
      }

      this.deletePosteDa = function (data) {
        var deferred = $q.defer()
        var numPosteDaId = data.id
        var urlDeleteNumPosteDa = apiUrlPosteDa + '/' + numPosteDaId
        $http.delete(urlDeleteNumPosteDa)
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
