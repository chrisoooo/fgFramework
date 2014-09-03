'use strict';

describe('Service: fgMessenger', function () {

  // load the service's module
  beforeEach(module('wsdcApp'));

  // instantiate service
  var fgMessenger;
  beforeEach(inject(function (_fgMessenger_) {
    fgMessenger = _fgMessenger_;
  }));

  it('should do something', function () {
    expect(!!fgMessenger).toBe(true);
  });

});
