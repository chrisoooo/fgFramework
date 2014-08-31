'use strict';

describe('Directive: fgNotificationCenter', function () {

  // load the directive's module
  beforeEach(module('wsdcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fg-notification-center></fg-notification-center>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fgNotificationCenter directive');
  }));
});
