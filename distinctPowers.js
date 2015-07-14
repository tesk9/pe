var Range = require('./range');

var distinctPowers = function(topBound) {
  var totalCombinations = Math.pow(topBound - 1, 2);
  var range = Range(2, topBound, true);
  var startingRangeLength = Object.keys(range).length;
  var a = 1, b;

  while(a < topBound) {
    a++;
    b = 1;
    while(b < topBound) {
      b++;
      delete range[Math.pow(a,b)];
    }
  }

  var endingRangeLength = Object.keys(range).length;
  return totalCombinations - (startingRangeLength - endingRangeLength);
};

console.log(distinctPowers(5));
// console.log(distinctPowers(5) === 15);
var res = distinctPowers(100);
console.log(res);