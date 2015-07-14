/* Find the sum of all numbers which are equal 
to the sum of the factorial of their digits */

var factorial = require('./factorial');

// Create factorial lookup table
var factorialTable = {};
for(var i = 0; i < 10; i++) {
  factorialTable[i] = factorial(i);
}
console.log(factorialTable);

var digitsFactorialSum;
var num = 3;
var total = 0;
while(num < factorialTable[9] * 7) {
  digitsFactorialSum = 0;
  ("" + num).split("").forEach(function(digit) {
    digitsFactorialSum += factorialTable[digit];
  });
  if(num === digitsFactorialSum) {
    total += num;
  }
  num++;
}

console.log(total);