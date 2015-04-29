var primes = require('./sieveOfErastothanes.js');
var Range = require('./range.js');

var smallestMultiple = function(topNumber) {
  var range = Range(2, topNumber);
  var mult = 1;
  for(var i = 0; i < range.length; i++) {
    for(var k = i + 1; k < range.length; k++) {
      if(!(range[k] % range[i])) {
        range[k] /= range[i];
      }
    }
  }
  return range.reduce(function(a,b) {
    return a * b;
  });

};

console.log(smallestMultiple(20));