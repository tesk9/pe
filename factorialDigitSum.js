var factorial = require('./factorial');
var hugeNumberMultiplier = require('./hugeNumberMultiplier');
var hugeNumberSummer = require('./hugeNumberSummer');

var factorialDigitSum = function(topNum) {
  var lastFactorial = [1];
  var counter = [1];
  var count = 1;
  while(count < topNum) {
    counter = hugeNumberSummer(counter, [1]);
    count++;
    lastFactorial = hugeNumberMultiplier(counter, lastFactorial);
  }
  console.log("factorial", lastFactorial.reverse().join(""));
  return lastFactorial.reduce(function(a,b) {
    return a + b;
  });
};

console.log(factorialDigitSum(1), 1) // => 1
console.log(factorialDigitSum(2), 2) // => 2
console.log(factorialDigitSum(3), 6); // => 6
console.log(factorialDigitSum(4), 6); // => 6
console.log(factorialDigitSum(10), 27) // PROJECT EULER EXAMPLE
console.log(factorialDigitSum(100))
