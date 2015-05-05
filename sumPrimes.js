var sieve = new require('./sieveOfErastothanes.js');

var sumPrimes = function(topNum) {
  var primesArr = sieve(topNum);
  return primesArr.reduce(function(a,b) {
    return a + b;
  });
};

console.log(sumPrimes(2000000000));