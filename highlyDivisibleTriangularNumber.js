// The nth triangle number is the sum of the first n natural numbers
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55...

var primeSieve = require('./sieveOfErastothanes.js');
var _ = require('underscore');

var TriangularNumbers = function() {
  var storage = {};
  return function(n) {
    if(storage[n]) {
      return storage[n];
    } else {
      var triangle = 1;
      var counter = 1;
      while(counter < n) {
        counter++;
        triangle += counter;
        storage[counter] = triangle;
      }
      return triangle;
    }
  }
}

var nthTriangleNumber = TriangularNumbers();

var triangleNumberWithOverNDivisors = function(n) {
  var i = 1, factorLength = n;
  while(factorLength < n) {
    // get ith triangular number
    console.log(nthTriangleNumber(i));

    // get factors for ith triangular number


  }
  // return ith triangular number
};

var getFactors = (function() {
  var primeFactorDictionary = {};
  var allFactors  = {};
  var _primes = [2];
  var primesObj = {};

  // Extend the array of prime numbers we're working with
  var updatePrimes = function(topNum) {
    var newPrimesInd = _primes.length - 1;
    _primes = primeSieve(topNum, _primes);
    for(var i = newPrimesInd; i < _primes.length; i++) {
      primesObj[_primes[i]] = 1;
    }
  };

  updatePrimes(100);

  var getPrimes = function(number) {
    if(!primeFactorDictionary[number]) {
      updatePrimes(Math.ceil(number/2));
      primeFactorDictionary[number] = [];

      // Add prime factors to factorDictionary at the number
      for(var i = 0; i < _primes.length; i++) {
        if(!(number % _primes[i])) {
          primeFactorDictionary[number].push(_primes[i]);
        }
      }

    }
    return primeFactorDictionary[number];
  }

  // Using the prime factors, find the rest of the factors
  var getAllFactors = function(number) {
    if(!allFactors[number]) {
      var primes = getPrimes(number);
      var factors = {}, quotient;

      // add prime factors to factors list
      for(var i = 0; i < primes.length; i++) {
        factors[primes[i]] = 1;
      }

      // use each prime to find remaining factors
      for(var i = 0; i < primes.length; i++) {
        quotient = number / primes[i];
        if(!factors[quotient] && quotient !== 1) {
          factors[quotient] = 1;
          console.log(number, "is divisible by", primes[i], "which gives us", quotient);
          Object.keys(getAllFactors(quotient)).forEach(function(fac) {
            factors[fac] = 1;
          });
        }
      }

      // save factors in closure
      allFactors[number] = factors;
    }

    return allFactors[number];
  };

  return function(number) {
    return Object.keys(getAllFactors(number)).map(function(val) {
      return parseInt(val, 10);
    });
  };
})();

// triangleNumberWithOverNDivisors(5);
