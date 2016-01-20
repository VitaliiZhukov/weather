define(['angular'], function (angular) {
  'use strict';

  angular.module('weatherApp.directives.CurrentCity', [])
    .directive('currentCity', function () {
      return {
        templateUrl: 'views/currentCity.html',
      };
    });
});
