var Range = require('./range.js');

var buildSieve = function(topNumber, primes, returnObject) {
  primes = primes || [2];

  // Create range
  var rangeObj = Range(primes[primes.length - 1], topNumber, true);

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

  if(returnObject) {
    return rangeObj;
  }

  return Object.keys(rangeObj).map(function(str) {
    return parseInt(str, 10);
  })
};

module.exports = buildSieve;