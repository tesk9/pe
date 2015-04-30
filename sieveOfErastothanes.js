var buildSieve = function(topNumber, primes) {
  primes = primes || [3];
  var num = primes[primes.length - 1] + 1;
  
  var isPrime = true;
  for(; num < topNumber; num++) {
    isPrime = true;
    for(var i = 0; i < primes.length; i++) {  
      if(!(num % primes[i])) {
        isPrime = false;
      }
    }
    if(isPrime) {
      primes.push(num);
    }
  }

  return primes;
};

module.exports = buildSieve;