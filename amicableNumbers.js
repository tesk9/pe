var getFactors = require('./factorization.js');

// d(n) is defined as the sum of proper divisors of n
// a and b are an amicable pair <=> d(a) = b and d(b) = a, a != b

var sumFactors = function(number) {
  return getFactors(number).reduce(function(val1, val2) {
    return val2 === number ? val1 : val1 + val2;
  }, 1);
};

var isAmicable = function(a) {
  /* a and b are an amicable pair 
    <=> d(a) = b and d(b) = a, a != b */
  var da = sumFactors(a);
  var db = sumFactors(da);
  return db === a && a !== da;
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

console.log(sumAmicableNumbers(10000));
