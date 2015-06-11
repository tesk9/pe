var getFactors = require('./factorization.js');

// d(n) is defined as the sum of proper divisors of n
// a and b are an amicable pair <=> d(a) = b and d(b) = a, a != b

var sumFactors = function(number) {
  return getFactors(number).reduce(function(val1, val2) {
    return val1 + val2;
  }, 1);
};

var isAmicable = function(number) {
  var d = sumFactors(number);
  if(d === number) {
    return false;
  }
  return sumFactors(d) === number;
}

var sumAmicableNumbers = function(topNum) {
  var current = 2;
  var result = 0;
  while(current < topNum) {
    if(isAmicable(current)) {
      result += current;
    }
    current++;
  }
  return result;
};

// console.log(sumAmicableNumbers(300));
console.log(isAmicable(3));
