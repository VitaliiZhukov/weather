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
    .controller('CurrentCityCtrl', function($scope) {
      getCurrentLocationWeather();

      function getCurrentLocationWeather() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            $scope.lat = position.coords.latitude;
            $scope.lon = position.coords.longitude;
            getWeatherByCoords($scope.lat, $scope.lon);
          });
        } else {
          alert('Геолокация отключена');
        }
      }

      function getWeatherByCoords(lat, lon) { // Получить данные о погоде по координатам
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=b28d0ac52d85fcb150a267da64e9776d';
        $.ajax({
          async: false,
          url: url,
          success: function(data) {
            $scope.temp = getCelcium(data.main.temp);
            $scope.wind = data.wind.speed;
            $scope.pressure = getMmHg(data.main.pressure);
            $scope.currentCity = data.name;
          }
        });
      }
    });
});