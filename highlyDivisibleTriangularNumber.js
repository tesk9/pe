// The nth triangle number is the sum of the first n natural numbers
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55...

var primeSieve = require('./sieveOfErastothanes.js');

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

var getPrimeFactors = (function() {
  var factorDictionary = {};
  primes = primeSieve(10);

  return function(number) {
    if(!factorDictionary[number]) {
      console.log("not memoized");
      primes = primeSieve(Math.ceil(number/2), primes);
      factorDictionary[number] = [];

      for(var i = 0; i < primes.length; i++) {
        if(!(number % primes[i])) {
          factorDictionary[number].push(primes[i]);
        }
      }
    }

    return factorDictionary[number];

  }

})();

triangleNumberWithOverNDivisors(5);
