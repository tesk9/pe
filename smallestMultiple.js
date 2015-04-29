var primes = require('./sieveOfErastothanes.js');
var _ = require('underscore');

var smallestMultiple = function(topNumber) {
  var range = buildRange(2, topNumber);
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

var buildRange = function(start, topNumber) {
  var rangeNums = [];
  if(topNumber === undefined) {
    topNumber = start;
    start = 1;
  }
  for(var i = start; i <= topNumber; i++) {
    rangeNums.push(i);
  }
  return rangeNums;
}

console.log(smallestMultiple(20));