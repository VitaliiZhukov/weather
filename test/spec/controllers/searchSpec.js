/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SearchCtrl', function () {

    // load the controller's module
    beforeEach(module('weatherApp.controllers.SearchCtrl'));

    var SearchCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SearchCtrl = $controller('SearchCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(SearchCtrl.awesomeThings.length).toBe(3);
    });
  });
});
