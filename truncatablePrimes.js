var primeSieve = require('./sieveOfErastothanes');

var getPrimes = function(guess) {
  var guess = guess || 100000;
  var primes = primeSieve(guess);
  var primeLookup = {};

  primes.forEach(function(prime) {
    primeLookup[prime] = 1;
  });

  return {
    isPrime: function(number) {
      if(number > primes[primes.length - 1]) {
        this.extendPrimes();
        return this.isPrime(number);
      }
      return !!primeLookup[number];
    },
    ithPrime: function(i) {
      return primes[i];
    },
    extendPrimes: function() {
      guess *= 2;
      var newPrimes = primeSieve(guess, primes);
      for(var i = 0; i < newPrimes.length; i++) {
        primeLookup[newPrimes[i]] = 1;
      }
      primes.pop();
      primes = primes.concat(newPrimes);
    },
    numberOfPrimes: function() {
      return primes.length;
    }
  }
};

var truncatablePrimes = function() {
  var primesAPI = getPrimes();
  var truncatablePrimes = [];
  var primeInd = 0;

  while(truncatablePrimes.length < 11) {
    if(primeInd === primesAPI.numberOfPrimes()) {
      primesAPI.extendPrimes();
    }
    var prime = primesAPI.ithPrime(primeInd);
    var truncations = truncate(prime);
    if(truncations.every(function(combo) {
      return primesAPI.isPrime(combo);
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
