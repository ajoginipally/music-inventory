'use strict';

describe('Filter: switchcase', function () {

  // load the filter's module
  beforeEach(module('musicInventoryApp'));

  // initialize a new instance of the filter before each test
  var switchcase;
  beforeEach(inject(function ($filter) {
    switchcase = $filter('switchcase');
  }));

  it('should return the input prefixed with "switchcase filter:"', function () {
    var text = 'angularjs';
    expect(switchcase(text)).toBe('switchcase filter: ' + text);
  });

});
