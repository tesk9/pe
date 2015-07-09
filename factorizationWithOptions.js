var primeSieve = require('./sieveOfErastothanes.js');
var _ = require('underscore');

var getFactors = (function() {
  var primeFactorDictionary = {};
  var allFactors  = {};
  var primes = [2];
  var primesObj = {};

  // Extend the prime numbers we're working with
  var updatePrimes = function(topNum) {
    var start = primes.length - 1;
    primes = primeSieve(topNum, primes);
    var end = primes.length;
    for(var i = start; i < end; i++) {
      primesObj[primes[i]] = 1;
    }
  };

  // Adds prime factor to primeFactorDictionary
  var getPrimes = function(number) {
    if(!primeFactorDictionary[number]) {
      primeFactorDictionary[number] = [];

      // Add prime factors to factorDictionary at the number
      for(var prime in primesObj) {
        if(!(number % prime)) {
          primeFactorDictionary[number].push(prime);
        }
      }

    }
    return primeFactorDictionary[number];
  };

  // Using the prime factors, find the rest of the factors
  var getAllFactors = function(number) {
    if(!allFactors[number]) {
      var primes = getPrimes(number);
      var factors = {}, quotient;

      // use each prime to find remaining factors
      primes.forEach(function(prime) {
        quotient = number / prime;
        if(!factors[quotient] && quotient !== 1) {
          factors[quotient] = 1;
          Object.keys(getAllFactors(quotient)).forEach(function(fac) {
            factors[fac] = 1;
          });
        }
      });

      // save factors in closure
      allFactors[number] = factors;
    }

    return allFactors[number];
  };

  updatePrimes(100);

  return {
    allFactors:  function(number) {
      return Object.keys(getAllFactors(number)).map(function(val) {
        return parseInt(val, 10);
      });
    },
    primeFactors: function(number) {
      getAllFactors(number);
      return primeFactorDictionary[number];
    }
  };
})();

module.exports = getFactors;
