var buildSieve = function(topNumber) {
  var primes = [2], isPrime = true;
  
  for(var num = 3; num < topNumber; num++) {
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

console.log(buildSieve(100000));