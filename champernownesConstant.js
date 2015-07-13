/*
  An irrational decimal fraction is created by concatenating 
  the positive integers:

  0.123456789101112131415161718192021...

  It can be seen that the 12th digit of the fractional part is 1.

  If dn represents the nth digit of the fractional part, 
  find the value of the following expression.

  d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

var champernowne = function(nthDigit) {
  var currentInd = 1;
  var currentPosInt = 1;
  var arr = ["."];

  while(currentInd <= nthDigit) {
    currentInd += ("" + currentPosInt).length;
    arr.push(currentPosInt)
    currentPosInt++;
  }

  return arr.join("");
};

var computeChampernowneDigitProduct = function(arrOfDigits) {
  var champ = champernowne(arrOfDigits[arrOfDigits.length - 1]);
  return arrOfDigits.reduce(function(a,b) {
    return a * champ[b];
  }, 1);
};

console.log(computeChampernowneDigitProduct([1,10,100,1000,10000,100000,1000000]));