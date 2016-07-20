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
