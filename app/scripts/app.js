/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/currentcity', 'directives/cities', 'directives/currentcity']/*deps*/, function (angular, MainCtrl, CurrenCityCtrl, CitiesDirective, CurrentCityDirective)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name weatherApp
   * @description
   * # weatherApp
   *
   * Main module of the application.
   */
  return angular
    .module('weatherApp', ['weatherApp.controllers.MainCtrl',
'weatherApp.controllers.CurrentCityCtrl',
'weatherApp.directives.Cities',
'weatherApp.directives.CurrentCity',
/*angJSDeps*/
    'ngRoute',
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
