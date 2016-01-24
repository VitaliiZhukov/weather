define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name weatherApp.controller:CurrenCityCtrl
   * @description
   * # CurrenCityCtrl
   * Controller of the weatherApp
   */
  angular.module('weatherApp.controllers.CurrentCityCtrl', [])
    .controller('CurrentCityCtrl', ["$scope", "$http", function($scope, $http) {
      getCurrentLocationWeather();

      var lat, lon;

      function getCurrentLocationWeather() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            getWeatherByCoords(lat, lon);
          });
        } else {
          alert('Geolocation is turned off.');
        }
      }

      function getWeatherByCoords(lat, lon) { // Получить данные о погоде по координатам
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=b28d0ac52d85fcb150a267da64e9776d';
        $http({
            url: url,
            method: 'GET'
          })
          .then(function successCallback(response) {
            $scope.temp = response.data.main.temp;
            $scope.wind = response.data.wind.speed;
            $scope.pressure = response.data.main.pressure;
            $scope.currentCity = response.data.name;
          });
      }
    }]);
});