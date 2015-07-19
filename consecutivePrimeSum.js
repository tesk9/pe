/*
  The prime 41, can be written as the sum of six consecutive primes:

  41 = 2 + 3 + 5 + 7 + 11 + 13
  This is the longest sum of consecutive primes that adds to a prime 
  below one-hundred.

  The longest sum of consecutive primes below one-thousand 
  that adds to a prime, contains 21 terms, and is equal to 953.

  Which prime, below one-million, can be written as the sum 
  of the most consecutive primes?
*/

var primes = require('./sieveOfErastothanes')(1000);
var primeLookup = {};

primes.forEach(function(val) {
  primeLookup[val] = 1;
});

var longestConsecutivePrimeSum = function(upperBound) {
  var sums = [1].concat(primes.slice());
  var passCounter = 0;
  var longestSum = 0;
  var longestLength = 0;
  var newSum;

  while(passCounter < primes.length) {
    for(var i = 0; i < sums.length - 1; i++) {
      newSum = sums[i] + primes[passCounter + i];
      sums[i] = newSum;

      // Check to see if sum is prime
      if(primeLookup[newSum] && passCounter > longestLength) {
        longestSum = newSum;
        longestLength = passCounter;
      }

    }
    sums.pop();
    passCounter++;
  }

  return longestSum;
};

console.log(longestConsecutivePrimeSum(10))