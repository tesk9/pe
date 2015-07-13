/*
We shall say that an n-digit number is pandigital 
if it makes use of all the digits 1 to n exactly once; 
for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, 
containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity 
can be written as a 1 through 9 pandigital.
*/


var isPandigital = function(num) {
  var store = {};
  var numArr = ("" + num).split("");
  numArr.forEach(function(digit) {
    store[digit] = 1;
  });
  return Object.keys(store).length === numArr.length;
};

console.log(isPandigital(15234) === true);
console.log(isPandigital(15534) === false);
console.log(isPandigital(1) === true)

