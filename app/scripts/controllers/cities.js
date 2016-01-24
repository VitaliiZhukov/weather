define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name weatherApp.controller:CitiesCtrl
   * @description
   * # CitiesCtrl
   * Controller of the weatherApp
   */
  angular.module('weatherApp.controllers.CitiesCtrl', [])
    .controller('CitiesCtrl', function($scope, $http) {
      updateCities();

      //localStorage.removeItem('cities');

      $scope.removeCity = function(index) {
        if (index > -1) {
          $scope.cities.splice(index, 1);
          localStorage.setItem('cities', JSON.stringify($scope.cities));
        }
      }

      function updateCities() {
        var i, url;
        if (!$scope.cities){
          return;
        }
        for (i = 0; i < $scope.cities.length; i++) {
          url = 'http://api.openweathermap.org/data/2.5/weather?id=' + $scope.cities[i].id + '&units=metric&appid=b28d0ac52d85fcb150a267da64e9776d';
          (function(ind) {
            $http({
                method: 'GET',
                url: url
              })
              .then(function successCallback(response) {
                if (response.status === 200) {
                  $scope.cities[ind].temp = response.data.main.temp;
                  $scope.cities[ind].wind = response.data.wind.speed;
                  $scope.cities[ind].press = response.data.main.pressure;
                }
              });
          })(i);
        }
        localStorage.setItem('cities', JSON.stringify($scope.cities));
      }
    });
});