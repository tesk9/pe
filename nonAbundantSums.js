/* a number is abundant if the sum of its proper divisors is greater than the number.
   it is deficient if the sum of its proper divisors is less than it
   and n is perfect if the sum of n's proper divisors IS n

   Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers
   Note that all integers greater than 28123 can be written as the sum of two abundant numbers. */

var getFactors = require('./factorization.js');

var isAbundant = function(number) {
  var properDivisorSum = getFactors(number).reduce(function(a,b) {
    return a + b;
  }, 1);
  return properDivisorSum > number;
};

var abundantNumberLister = function(topNum) {
  var list = {}, num = 1;
  while(num < topNum) {
    if(isAbundant(num)) {
      list[num] = true;
    }
    num++;
  }
  return list;
}

// console.log(isAbundant(4) === false); // true
// console.log(isAbundant(12) === true); // true
