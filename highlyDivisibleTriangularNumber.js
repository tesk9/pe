// The nth triangle number is the sum of the first n natural numbers
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55...
var getFactors = require('./factorization.js');

var nthTriangleNumber = require('./triangleNumber').nthTriangleNumber;

var triangleNumberWithOverNDivisors = function(n) {
  var i = 1, ithTriangle, factors;

  while(true) {
    // get ith triangular number
    ithTriangle = nthTriangleNumber(i); 

    // get factors for ith triangular number
    factors = getFactors(ithTriangle);

    // return ith triangular number if over n factors 
    // we are doing length+2 because factors does not include 1 or itself
    if(factors.length + 2 > n) {
      return ithTriangle;
    }

    // otherwise, increment i
    i++;
  }
};
  
console.log(triangleNumberWithOverNDivisors(500)); // 28
