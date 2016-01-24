define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name weatherApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the weatherApp
   */
  angular.module('weatherApp.controllers.MainCtrl', [])
    .controller('MainCtrl', ["$scope", function($scope) {
      $scope.cities = JSON.parse(localStorage.getItem('cities')) || [];
    }]);
});