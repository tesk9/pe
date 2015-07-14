/* Find the sum of all numbers which are equal 
to the sum of the factorial of their digits */

var factorial = require('./factorial');

var digitsFactorialSum;
var num = 3;
var total = 0;
while(num < 10000000) {
  digitsFactorialSum = 0;
  ("" + num).split("").forEach(function(digit) {
    digitsFactorialSum += factorial(digit);
  });
  if(num === digitsFactorialSum) {
    total += num;
  }
  num++;
}

console.log(total);