var primeSieve = require('./sieveOfErastothanes');

var truncatablePrimes = function() {
  var truncatablePrimes = [];
  var primeInd = 0;
  var guess = 100000;
  var primes = primeSieve(guess);

  var primeLookup = {};
  primes.forEach(function(prime) {
    primeLookup[prime] = 1;
  });

  while(truncatablePrimes.length < 11) {
    if(primeInd === primes.length) {
      guess *= 2;
      var newPrimes = primeSieve(guess, primes);
      for(var i = primeInd; i < newPrimes.length; i++) {
        primeLookup[newPrimes[i]] = 1;
      }
      primes.pop();
      primes = primes.concat(newPrimes);
    }
    var prime = primes[primeInd];
    var truncations = truncate(prime);
    if(truncations.every(function(combo) {
      return primeLookup[combo];
    })) {
      prime > 9 ? truncatablePrimes.push(prime) : "";
    }
    primeInd++;
  };

  return truncatablePrimes.reduce(function(a,b) {
    return +(a) + +(b);
  });
};

var truncate = function(input) {
  var combinations = [];
  var elements = ("" + input).split("");
  for(var i = 0; i < elements.length; i++) {
    combinations.push(elements.slice(i).join(""));
    combinations.push(elements.slice(0, i + 1).join(""));
  }
  return combinations;
};

console.log(truncatablePrimes());
