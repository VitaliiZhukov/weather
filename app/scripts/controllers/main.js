define(['angular','jquery','common'], function(angular,$) {
  'use strict';

  /**
   * @ngdoc function
   * @name weatherApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the weatherApp
   */
  angular.module('weatherApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function($scope) {
      var cities = JSON.parse(localStorage.getItem('cities'));
      cities = cities || [];
      $scope.cities = cities;
      updateCities();

      //localStorage.removeItem('cities');

      $scope.addCity = function() {
        var city = $scope.cityName;
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b28d0ac52d85fcb150a267da64e9776d';
        var newCity;
        if (city) {
          $.ajax({
            async: false,
            url: url,
            success: function(data) {
              if (data.cod === 404) {
                alert('Город не найден!');
                return;
              }
              if (checkIfCityIsNew(data.id)) {
                newCity = {
                  cityName: city,
                  id: data.id,
                  temp: getCelcium(data.main.temp),
                  wind: data.wind.speed,
                  press: getMmHg(data.main.pressure)
                }

                $scope.cities.push(newCity);
                $scope.cityName = '';
                localStorage.setItem('cities', JSON.stringify($scope.cities));
              } else {
                alert(city + ' уже внесен в список.');
              }
            }
          });
        }
      }

      $scope.removeCity = function(index) {
        if (index > -1) {
          $scope.cities.splice(index, 1);
          localStorage.setItem('cities', JSON.stringify($scope.cities));
        }
      }

      function checkIfCityIsNew(id) {
        var cityIs = false;
        var i;
        for (i = 0; i < $scope.cities.length; i++) {
          if ($scope.cities[i].id === id) {
            cityIs = true;
            break;
          }
        }
        return !cityIs;
      }

      function updateCities() {
        var i, url;
        for (i = 0; i < $scope.cities.length; i++) {
          url = 'http://api.openweathermap.org/data/2.5/weather?id=' + $scope.cities[i].id + '&appid=b28d0ac52d85fcb150a267da64e9776d';
          $.ajax({
            async: false,
            url: url,
            success: function(data) {
              $scope.cities[i].temp = getCelcium(data.main.temp);
              $scope.cities[i].wind = data.wind.speed;
              $scope.cities[i].press = getMmHg(data.main.pressure);
            }
          });
        }
        localStorage.setItem('cities', JSON.stringify($scope.cities));
      }

    });
});