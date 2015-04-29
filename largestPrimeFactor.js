var sieve = new require('./sieveOfErastothanes.js');

function largestPrimeFactor (number) {
  var primesArr = sieve(10000);
  var primesObj = {};
  for(var i = 0; i < primesArr.length; i++) {
    primesObj[primesArr[i]] = true;
  }

  var recurse = function(number) {
    var index = 0;
    if(primesObj[number]) {
      return number;
    }
    while(index < primesArr.length) {
      if(!(number % primesArr[index])) {
        return recurse(number / primesArr[index]);
      }
      index++;
    }
  }

  return recurse(number);
};

// console.log(largestPrimeFactor(10)); // 5
// console.log(largestPrimeFactor(27)); // 3
// console.log(largestPrimeFactor(19)); // 19
console.log(largestPrimeFactor(600851475143));
// largestPrimeFactor();
