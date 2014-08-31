'use strict';

describe('Controller: VideosupervisonCtrl', function () {

  // load the controller's module
  beforeEach(module('wsdcApp'));

  var VideosupervisonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideosupervisonCtrl = $controller('VideosupervisonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
