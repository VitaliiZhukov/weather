/*jshint unused: vars */
// define(['angular', 'controllers/main', 'controllers/currentcity', 'controllers/search'] /*deps*/ , function (angular, MainCtrl, CurrenCityCtrl, SearchCtrl) /*invoke*/ {
define(['angular', 'controllers/main', 'controllers/currentcity', 'directives/search', 'directives/currentcity', 'controllers/search', 'controllers/cities'] /*deps*/ , function(angular, MainCtrl, CurrenCityCtrl, SearchDirective, CurrentCityDirective, SearchCtrl, CitiesCtrl) /*invoke*/ {
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
      'weatherApp.directives.Search',
      'weatherApp.directives.CurrentCity',
      'weatherApp.controllers.SearchCtrl',
      'weatherApp.controllers.CitiesCtrl',
      'ngRoute',
      'ngTouch'
    ])
    .config(["$routeProvider", function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
});