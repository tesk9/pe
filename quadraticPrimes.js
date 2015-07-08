var primeSieve = require('./sieveOfErastothanes');
var objectify = require('./helpers').objectify;

var primeLookup = objectify(primeSieve(2000));

var quadratic = function(a,b,c) {
  return function(x) {
    return a * x * x + b * x + c;
  };
};

var quadraticPrimes = function() {
  var n, quad;
  var currentConseqPrimes;
  var maxConseqPrimes = 0;
  var storeB, storeC;

  // Find all quadratic formulae for |b| < 1000 & |c| < 1000
  for(var b = -1000; b <= 1000; b++) {
    for(var c = -1000; c <= 1000; c++) {


      // Find the number of consecutive primes for each b, c combination
      n = 0;
      quad = quadratic(1, b, c);
      currentConseqPrimes = 0;

      while(primeLookup[quad(n)]) {
        currentConseqPrimes++;

        if(currentConseqPrimes > maxConseqPrimes) {
          maxConseqPrimes = currentConseqPrimes;
          storeB = b;
          storeC = c;
        }

        n++;
      }
    }
  }

  /* Return the product of b and c
  for the expression that produces the most consecutive primes */
  return storeB * storeC;
};

console.log(quadraticPrimes());
