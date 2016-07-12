(function () {
  'use strict'

  angular.module('ProblemsTest', [])
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myButton', [
    function () {
      return {
        restrict: 'E',
        scope: {
          onclick: '=onclick',
          label: '@btnLabel'
        },
        templateUrl: '/component/button/button.html'
      }
    }
  ])
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myComment', [
    function () {
      return {
        restrict: 'E',
        scope: {
          comment: '=enterNewComment'
        },
        templateUrl: '/component/comment/comment.html'
      }
    }
  ])
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myNumPosteDa', [
    function () {
      return {
        restrict: 'E',
        scope: {
          numPosteDa: '=enterNumPosteda'
        },
        templateUrl: '/component/numPosteDA/numPosteDA.html'
      }
    }
  ])
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myAdresseIpSopra', [
    function () {
      return {
        restrict: 'E',
        scope: {
          adresseIPSopra: '=enterAdressIpsopra'
        },
        templateUrl: '/component/adresseIPSopra/adresseIPSopra.html'
      }
    }
  ])
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myUser', [
    function () {
      return {
        restrict: 'E',
        scope: {
          user: '=enterUser'
        },
        templateUrl: '/component/user/user.html'
      }
    }
  ])
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myProblems', ['configMessages', function (configMessages) {
    return {
      restrict: 'E',
      scope: {
        problems: '=problemsType',
        ondatachange: '=ondatachange',
        itemId: '=idvalue'
      },
      templateUrl: '/component/type-problem/type-problem.html'
    }
  }])
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myDuree', [
    function () {
      return {
        restrict: 'E',
        scope: {
          duration: '=problemsTypeDuree',
          setvalue: '=setvalue'
        },
        controller: ['$scope', 'TimeService', function ($scope, TimeService) {
          $scope.setvalue = function (duration) {
            $scope.unit = TimeService.getTimeUnit(duration)
            $scope.displaytime = TimeService.computeDisplayTime(duration, $scope.unit)
          }

          $scope.computetime = function () {
            $scope.duration = TimeService.convertInMs($scope.displaytime, $scope.unit)
            return $scope.duration
          }

          $scope.checknumber = function (e) {
            if (!TimeService.keyisvalid(e.key)) {
              e.preventDefault()
            }
          }
        }],
        templateUrl: '/component/type-duree/type-duree.html'
      }
    }
  ])
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  var configConnexionServer = {
    port: '8080',
    server: 'localhost'
  }

  module.constant('serverConnexion', configConnexionServer)
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  var configMessages = {
    problems: 'problems',
    typeProbleme: 'typeProbleme',
    repeatProblems: 'x in problems',
    valueProblem: '{{x.typeProblems}}',
    valueDuree: '{{x.duree}}'
  }

  module.constant('configMessages', configMessages)
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.controller('ProblemsController', [
    '$scope',
    'ProblemsService',
    'ProblemsTypeService',
    function ($scope, ProblemsService, ProblemsTypeService) {
      var initialValue = 20
      $scope.problemType
      $scope.duration
      $scope.comment
      $scope.problemId
      $scope.comment
      $scope.user
      $scope.numPosteDa
      $scope.adresseIPSopra
      $scope.problems = []
      $scope.date = Date.now()

      ProblemsTypeService.getProblems().then(function (problems) {
        $scope.problems = problems
        $scope.problemIndex = initialValue
        $scope.problemType = $scope.problems[initialValue].typeProbleme
        $scope.duration = $scope.problems[initialValue].duree
        $scope.setduration($scope.duration)
        $scope.comment = ''
        $scope.user = ''
        $scope.numPosteDa = ''
        $scope.adresseIPSopra = '172.50.3.54'
      })
      .catch(function (err) {
        alert('Erreur')
        console.log(err)
      })

      $scope.ontypechange = function (type) {
        $scope.problemType = type.typeProbleme
        $scope.duration = type.duree
        $scope.setduration($scope.duration)
      }

      $scope.onsubmit = function () {
        var objectToSend = {
          typeProbleme: $scope.problemType,
          duree: $scope.duration,
          commentaire: $scope.comment,
          user: $scope.user,
          numPosteDA: $scope.numPosteDa,
          adresseIPSopra: $scope.adresseIPSopra,
          date: $scope.date
        }
        ProblemsService.createProblem(objectToSend)
        .then(function (problems) {
          alert('Well inserted')
        })
        .catch(function (err) {
          alert('Erreur')
          console.log(err)
        })
      }
    }
  ])
})();// eslint-disable-line semi

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


(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.service('ProblemsTypeService', [
    '$q',
    '$http',
    'serverConnexion',
    function ($q, $http, serverConnexion) {
      var ressourceNameGetProblems = 'problemsTypes'
      var apiUrlGetProblems = 'http://' + serverConnexion.server + ':' + serverConnexion.port + '/' + ressourceNameGetProblems
      this.getProblems = function () {
        var deferred = $q.defer()
        $http.get(apiUrlGetProblems)
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

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  var configUnitTime = {
    seconds: 's',
    minutes: 'm',
    hours: 'h'
  }

  module.service('TimeService',
    function () {
      this.getTimeUnit = function (duration) {
        var unit
        var invalidDuration = 'Duration is invalid'
        if (!duration) {
          throw invalidDuration
        }

        if (duration < 59999) {
          unit = configUnitTime.seconds
        } else if (duration < 3599999) {
          unit = configUnitTime.minutes
        } else {
          unit = configUnitTime.hours
        }
        return unit
      }

      this.computeDisplayTime = function (duration, unit) {
        var displaytime
        var unknowUnit = 'Unknown unit'
        switch (unit) {
          case configUnitTime.seconds :
            displaytime = Math.ceil(duration / 1000)
            break
          case configUnitTime.minutes :
            displaytime = Math.ceil(duration / 60000)
            break
          case configUnitTime.hours :
            displaytime = Math.ceil(duration / 3600000)
            break
          default :
            throw unknowUnit
        }
        return displaytime
      }

      this.convertInMs = function (displaytime, unit) {
        var duration
        var unknownUnit = 'Unknown unit'
        switch (unit) {
          case configUnitTime.seconds :
            duration = displaytime * 1000
            break
          case configUnitTime.minutes :
            duration = displaytime * 60000
            break
          case configUnitTime.hours :
            duration = displaytime * 3600000
            break
          default :
            throw unknownUnit
        }
        return duration
      }

      this.keyisvalid = function (key) {
        var numbers = '0123456789'
        if (numbers.indexOf(key) !== -1 || key === 'Backspace') {
          return true
        } else {
          return false
        }
      }
    })
})();// eslint-disable-line no-alert, quotes, semi

//# sourceMappingURL=all.js.map
