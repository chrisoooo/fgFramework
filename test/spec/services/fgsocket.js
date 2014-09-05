'use strict';

describe('Service: fgSocket', function () {

  // load the service's module
  beforeEach(module('wsdcApp'));

  // instantiate service
  var fgSocket;
  beforeEach(inject(function (_fgSocket_) {
    fgSocket = _fgSocket_;
  }));

  it('should do something', function () {
    expect(!!fgSocket).toBe(true);
  });

});
