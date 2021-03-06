(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myButton', ['CheckNumberService',
    function (CheckNumberService) {
      return {
        restrict: 'E',
        scope: {
          onclick: '=onclick',
          label: '@btnLabel'
        },
        controller: ['$scope', function ($scope) {

        }],
        templateUrl: '/component/button/button.html',
        link: function ($scope, element, attributes) {
          if (CheckNumberService.isNormalInteger(attributes.btnWidth) === true) {
            var buttonFirstChild = element.children(0).children(0)
            var btnWidth = attributes.btnWidth + 'px'

            buttonFirstChild.css('width', btnWidth)
          } else {
            var buttonSecondChild = element.children(0).children(0)
            buttonSecondChild.css('padding', '15px')
          }

          if (CheckNumberService.isNormalInteger(attributes.btnHeight) === true) {
            var buttonFirstChildHeight = element.children(0).children(0)
            var btnHeight = attributes.btnHeight + 'px'

            buttonFirstChildHeight.css('height', btnHeight)
          } else {
            var buttonSecondChildHeight = element.children(0).children(0)
            buttonSecondChildHeight.css('padding', '15px')
          }
        }
      }
    }
  ])
})();// eslint-disable-line semi
