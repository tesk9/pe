var Range = require('./range.js');
var _ = require('underscore');

var buildSieve = (function() {
  var primes = {2: true};
  var range;

  var deleteMultiples = function(number, topNumber) {
    var multiple = number * 2;
    while(multiple <= topNumber) {
      delete range[multiple];
      multiple += +number;
    }
  };

  var updatePrimes = function(topNumber) {
    range = Range(2, topNumber, true); // object

    // Iterate through existing primes
    for(var prime in primes) {
      deleteMultiples(prime, topNumber);
    }

    // Iterate through range with newly found primes
    for(var prime in range) {
      deleteMultiples(prime, topNumber);
    }

    primes = _.extend(primes, range);
  };

  return function(topNumber) {
    updatePrimes(topNumber);
    return primes;
  };
})();

module.exports = buildSieve;
