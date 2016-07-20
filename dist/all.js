(function () {
  'use strict'

  angular.module('ProblemsTest', [])
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

  module.directive('myButton', [
    function () {
      function isNormalInteger (str) {
        return /^\\?(0|[1-9]\d*)$/.test(str)
      }
      return {
        restrict: 'E',
        scope: {
          onclick: '=onclick',
          label: '@btnLabel'
        },
        templateUrl: '/component/button/button.html',
        link: function ($scope, element, attributes) {
          if (isNormalInteger(attributes.btnWidth) === true) {
            var buttonFirstChild = element.children(0).children(0)
            var btnWidth = attributes.btnWidth + 'px'

            buttonFirstChild.css('width', btnWidth)
          } else {
            var buttonSecondChild = element.children(0).children(0)
            buttonSecondChild.css('padding', '15px')
            // var btnPadding = padding: 15px;
          }

          if (isNormalInteger(attributes.btnHeight) === true) {
            var buttonFirstChild = element.children(0).children(0)
            var btnWidth = attributes.btnHeight + 'px'

            buttonFirstChild.css('height', btnWidth)
          } else {
            var buttonSecondChild = element.children(0).children(0)
            buttonSecondChild.css('padding', '15px')
            // var btnPadding = padding: 15px;
          }
        }
      }
    }
  ])
})();// eslint-disable-line semi

(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myCustomInput', [
    function () {
      return {
        restrict: 'E',
        scope: {
          val: '=val',
          label: '@label'
        },
        templateUrl: '/component/custom-input/custom-input.html',
        link: function($scope, elem, attributes) {
          var inputContainer = elem.children(0)
          var elemInput = inputContainer.children(0)

          setTimeout(function() {
            var value = elemInput.val()
            if( elemInput.val() !== '' ) { // in case the input is already filled..
              inputContainer.addClass('input--filled')
            }
          }, 100)

          // events:
          elemInput.on( 'focus', onInputFocus );
          elemInput.on( 'blur', onInputBlur );

          function onInputFocus( ev ) {
            inputContainer.addClass('input--filled' );
          }

          function onInputBlur( ev ) {
            var value = elemInput.val()
            if( elemInput.val() === '' ) { // in case the input is not filled..
              inputContainer.removeClass('input--filled' );
            }
          }
        }
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
      templateUrl: '/component/type-problem/type-problem.html',
      link: function($scope, elem, attributes){
        var elemSVG = elem.children(0).children(0).children(0).children(0)
        console.log(elemSVG)
        console.log(elem)

        setTimeout(function() {
          var elemLi = elem.find("li")
            var tabChecked = []
          elemLi.on('click', function(){
            var elemAllLiInput = elemLi.find('input')
            for(var i=0; i<elemAllLiInput.length; i++){
              console.log(i + ': ' + elemAllLiInput[i]['checked'])
              tabChecked[i] = elemAllLiInput[i]['checked']
              console.log(tab)
              tabChecked++;
            }
            console.log(tabChecked)
            console.log($scope.itemId)
            console.log(elemAllLiInput[0]['checked'])
            console.log(elemAllLiInput)
          }) 
        }, 100)

        var swirl = '<path d="M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89 c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837 c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079 c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826 c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371 c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262 c0.643,4.698,0.646,10.775-3.811,13.746" style="stroke-dasharray: 586.363, 586.363; stroke-dashoffset: 0; transition: stroke-dashoffset 0.8s ease-in 0s;"/>'

      }
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
