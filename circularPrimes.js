/* Circular primes are those for which all rotations of the prime's digits
  are also prime. For example, 197, 719, and 971 are all prime. */

var primeSieve = require('./sieveOfErastothanes.js');

var getCircularPrimes = function(topNumber) {
  var primes = {};
  var circularPrimesCounter = 0;
  var primesArr = primeSieve(topNumber);
  primesArr.forEach(function(prime) {
    primes[prime] = true;
  });

  for(var prime in primes) {
    var rotations = getRotations(prime);
    var circularPrime = true;

    if(rotations.every(function(rotation) {
      var found = primes[rotation];
      delete primes[rotation];
      return found;
    })) {
      circularPrimesCounter += rotations.length;
    }
  }

  return circularPrimesCounter;
}

var getRotations = function(arg) {
  var rotations = [];
  var strArr = ("" + arg).split("");
  
  for(var i = 0; i < strArr.length; i++) {
    var combo = [];
    var j = i;
    while(combo.length < strArr.length) {
      combo.push(strArr[j % strArr.length]);
      j++;
    }
    combo = combo.join("");
    if(rotations[rotations.length - 1] !== combo) {
      rotations.push(combo);
    }
  }

  return rotations;
};


console.log(getCircularPrimes(1000000));