define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name weatherApp.directive:cities
   * @description
   * # cities
   */
  angular.module('weatherApp.directives.Cities', [])
    .directive('enterPressed', function() {
      return function(scope, element, attrs) {
        element.bind('keydown keypress', function(event) {
          var keyCode = event.which || event.keyCode;

          if (keyCode === 13) {
            scope.$apply(function() {
              scope.$eval(attrs.enterPressed);
            });

            event.preventDefault();
          }
        });
      };
    });
});