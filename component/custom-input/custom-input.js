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
