var Range = require('./range.js');

var buildSieve = function(topNumber, primes) {
  primes = primes || [2];

  // Create range
  var range = Range(primes[primes.length - 1], topNumber);

  // Create range object
  var rangeObj = {};
  for(var i = 0; i < primes.length; i++) {
    rangeObj[primes[i]] = 1;
  }
  for(var i = 0; i < range.length; i++) {
    rangeObj[range[i]] = 1;
  }

  // Iterate over primes
  var multiple, i;
  for(var prime in rangeObj) {
    i = 2;
    multiple = prime;

    while(multiple <= topNumber) {
      multiple = prime * i;
      delete rangeObj[multiple];
      i++;
    }
  }

  return Object.keys(rangeObj).map(function(str) {
    return parseInt(str, 10);
  })
};

module.exports = buildSieve;