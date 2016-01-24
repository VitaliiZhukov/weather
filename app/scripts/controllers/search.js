define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name weatherApp.controller:SearchCtrl
   * @description
   * # SearchCtrl
   * Controller of the weatherApp
   */
  angular.module('weatherApp.controllers.SearchCtrl', [])
    .controller('SearchCtrl', function($scope, $http) {
      var selectedIndex = -1;
      $scope.showSuggestions = false;
      $scope.suggestions = [];

      $scope.$watch('cityName', function(val) {
        if (val){
          $scope.suggestions = getSuggestions($scope.cityName);          
        }
      });

      function getSuggestions(str) {
        var url = 'http://api.openweathermap.org/data/2.5/find?q=' + str + '&type=like&mode=json&units=metric&appid=b28d0ac52d85fcb150a267da64e9776d';
        $http({
            method: 'GET',
            url: url
          })
          .then(function successCallback(response) {
            if (response.status === 200) {
              $scope.suggestions = response.data.list || [];
            }
          });
      }

      function changeSuggestionState() {
        var i,
          n = $scope.suggestions ? $scope.suggestions.length : 0;
        for (i = 0; i < n; i++) {
          $scope.suggestions[i].activeSug = (i === selectedIndex) ? {
            'background-color': 'Lavender'
          } : {};
        }
      }

      $scope.searchFocus = function() {
        $scope.showSuggestions = true;
      }

      $scope.searchBlur = function() {}

      $scope.keyDown = function($event) {
        switch ($event.keyCode) {
          case 40:
            if ($scope.suggestions) {
              selectedIndex = (selectedIndex === $scope.suggestions.length - 1) ? 0 : ++selectedIndex;
              changeSuggestionState();
            }
            break;
          case 38:
            $event.preventDefault();
            if ($scope.suggestions) {
              selectedIndex = (selectedIndex === -1) ? $scope.suggestions.length - 1 : --selectedIndex;
              changeSuggestionState();
            }
            break;
          case 13:
            $scope.addCity(selectedIndex);
            break;
          default:
            return;
        }
      }

      $scope.addCity = function(index) {
        var city;
        selectedIndex = index === undefined ? selectedIndex : index;
        if (!$scope.suggestions || (selectedIndex === -1)) {
          alert('City wasn\'t found!');
          selectedIndex = -1;
          return;
        }

        city = $scope.suggestions[selectedIndex];
        selectedIndex = -1;

        if (city.id === 0) {
          alert('Error! City is not identified!');
          return;
        }
        if (checkIfCityIsNew(city.id)) {
          var newCity = {
            cityName: city.name,
            id: city.id,
            temp: city.main.temp,
            wind: city.wind.speed,
            press: city.main.pressure,
            country: city.sys.country
          }

          $scope.cities.push(newCity);
          $scope.cityName = '';
          $scope.suggestions = [];
          localStorage.setItem('cities', JSON.stringify($scope.cities));
        } else {
          alert(city.name + ' is already in the list.');
        }
      }

      function checkIfCityIsNew(id) {
        var i,
          cityIs = false;
          console.log(6);
        for (i = 0; i < $scope.cities.length; i++) {
          if ($scope.cities[i].id === id) {
            cityIs = true;
            break;
          }
        }
        return !cityIs;
      }
    });
});