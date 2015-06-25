/*
  Find the value of d < 1000 for which 1/d contains the
  longest recurring cycle in its decimal fraction part
*/

var toDecimalFromUnitFraction = function(numerator, denominator, number) {
  number = (number !== undefined) ? number : ["0."];
  var lastSequence = "";
  var quotient = numerator / denominator;

  number.push(Math.floor(numerator * 10 / denominator));

  var diff = numerator * 10 / denominator - Math.floor(numerator * 10 / denominator);
  if(diff) {
    if(number.length < 10) {
      toDecimalFromUnitFraction(diff, 1, number);
    }
  }

  return number.join("");
};

console.log(toDecimalFromUnitFraction(1,1), 1)
console.log(toDecimalFromUnitFraction(1,2), .5);
console.log(toDecimalFromUnitFraction(1,3), .33);
console.log(toDecimalFromUnitFraction(1,4), .25);
console.log(toDecimalFromUnitFraction(1,5), .2)
console.log(toDecimalFromUnitFraction(1,6), '.1(6)');
console.log(toDecimalFromUnitFraction(1,7), '.(142857)');
console.log(toDecimalFromUnitFraction(1,8), .125);
console.log(toDecimalFromUnitFraction(1,9), '.(1)');
console.log(toDecimalFromUnitFraction(1,10), .1)