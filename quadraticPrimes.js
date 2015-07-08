var primeSieve = require('./sieveOfErastothanes');
var objectify = require('./helpers').objectify;

var primeLookup = objectify(primeSieve(2000));

var quadratic = function(a,b,c) {
  return function(x) {
    return a * x * x + b * x + c;
  };
};

// Find all quadratic formulae for |b| < 1000 & |c| < 1000

// Find the number of consecutive primes for each b,c combination

/* Return the product of b and c
for the expression that produces the most consecutive primes */
