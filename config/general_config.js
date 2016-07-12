(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  var configConnexionServer = {
    port: '8080',
    server: 'localhost'
  }

  module.constant('serverConnexion', configConnexionServer)
})();// eslint-disable-line semi
