(function () {
  'use strict'
  var module = angular.module('ProblemsTest')

  module.directive('myCustomTextarea', ['CheckNumberService',
    function (CheckNumberService) {
      return {
        restrict: 'E',
        scope: {
          val: '=val',
          label: '@label',
          fct: '=fct'
        },
        templateUrl: '/component/custom-textarea/custom-textarea.html',
        link: function ($scope, element, attributes) {
          if (CheckNumberService.isNormalInteger(attributes.btnWidth) === true) {
            var buttonFirstChild = element.children(0)
            var btnWidth = attributes.btnWidth + 'px'

            buttonFirstChild.css('width', btnWidth)
          } else {
            var buttonSecondChild = element.children(0)
            buttonSecondChild.css('width', '350px')
          }

          if (CheckNumberService.isNormalInteger(attributes.btnHeight) === true) {
            var buttonFirstChildHeight = element.children(0)
            var btnHeight = attributes.btnHeight + 'px'

            buttonFirstChildHeight.css('height', btnHeight)
          } else {
            var buttonSecondChildHeight = element.children(0)
            buttonSecondChildHeight.css('height', '150px')
          }
        }
      }
    }
  ])
})();// eslint-disable-line semi
