var primeFactors = require('./factorizationWithOptions.js');

var distinctPrimeFactors = function(numOfDistinctPrimeFactors) {
  var consecutiveNumbers = [];
  var number = 1;
  while(consecutiveNumbers.length < numOfDistinctPrimeFactors) {
    var primeFacs = primeFactors.primeFactors(number);
    if(primeFacs.length === numOfDistinctPrimeFactors) {
      // console.log(number, primeFacs);
      consecutiveNumbers.push(number);
    } else {
      consecutiveNumbers = [];
    }
    number++;
  }
  return consecutiveNumbers;
};

console.log(distinctPrimeFactors(3));
