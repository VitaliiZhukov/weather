/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: cities', function () {

    // load the directive's module
    beforeEach(module('weatherApp.directives.Cities'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<cities></cities>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the cities directive');
    }));
  });
});
