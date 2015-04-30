var sieve = require('./sieveOfErastothanes');

var nthPrime = function(n) {
  var primes = sieve(n), largestPrime;
  while(primes) {
    if(primes[n - 1]) {
      return primes[n - 1];
    }

    largestPrime = primes[primes.length - 1];
    primes = sieve(largestPrime*2, primes);
  }
}

console.log(nthPrime(10001));