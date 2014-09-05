'use strict';

describe('Service: fgHttpInterceptor', function () {

  // load the service's module
  beforeEach(module('wsdcApp'));

  // instantiate service
  var fgHttpInterceptor;
  beforeEach(inject(function (_fgHttpInterceptor_) {
    fgHttpInterceptor = _fgHttpInterceptor_;
  }));

  it('should do something', function () {
    expect(!!fgHttpInterceptor).toBe(true);
  });

});
