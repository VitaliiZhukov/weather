/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: currentCity', function () {

    // load the directive's module
    beforeEach(module('weatherApp.directives.CurrentCity'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<current-city></current-city>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the currentCity directive');
    }));
  });
});