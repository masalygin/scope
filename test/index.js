var expect = require('chai').expect;
var scope = require('../');
var get = scope.get;
var set = scope.set;

describe('scope', function () {

  var a = {};
  var b = {};


  it('#set', function () {
    set.call(a, 'prop', 1);
    set.call(b, 'prop', 2);
  });


  it('#get', function () {
    expect(get.call(a, 'prop')).to.equal(1);
    expect(get.call(b, 'prop')).to.equal(2);
  });

});
