'use strict';

describe('Controller: VideomantainCtrl', function () {

  // load the controller's module
  beforeEach(module('wsdcApp'));

  var VideomantainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideomantainCtrl = $controller('VideomantainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
