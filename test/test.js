var R = require('..');
var Maybe = require('ramda-fantasy').Maybe;
var chai = require('chai');
chai.should();

describe('ramda maybe', function() {

  var numbers = [ 1, 2, 3 ];

  describe('case Just', function() {
    var m;

    beforeEach(function() {
      m = R.find(R.eq(2), numbers);
    });

    it('returns maybe objects for specified functions', function() {
      m.isJust().should.equal(true);
    });

    it('is mappable', function() {
      var m2 = m.map(R.add(1));
      m2.equals(Maybe(3)).should.equal(true);
    });

    it('is curried', function() {
      var find2 = R.find(R.eq(2));
      var m2 = find2(numbers);
      m2.equals(m).should.equal(true);
    });

  });

  describe('case nothing', function() {

    it('returns a nothing for undefined returns', function() {
      var m = R.find(R.is(String), numbers);
      m.isNothing().should.equal(true);
    });

  });

});
