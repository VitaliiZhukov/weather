/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: CitiesCtrl', function () {

    // load the controller's module
    beforeEach(module('weatherApp.controllers.CitiesCtrl'));

    var CitiesCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      CitiesCtrl = $controller('CitiesCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(CitiesCtrl.awesomeThings.length).toBe(3);
    });
  });
});
