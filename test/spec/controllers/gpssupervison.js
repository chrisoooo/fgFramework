'use strict';

describe('Controller: GpssupervisonCtrl', function () {

  // load the controller's module
  beforeEach(module('wsdcApp'));

  var GpssupervisonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GpssupervisonCtrl = $controller('GpssupervisonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
