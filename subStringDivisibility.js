/*
  The number, 1406357289, is a 0 to 9 pandigital number because 
  it is made up of each of the digits 0 to 9 in some order, 
  but it also has a rather interesting sub-string divisibility property.

  Let d1 be the 1st digit, d2 be the 2nd digit, and so on. 
  In this way, we note the following:

  d2d3d4=406 is divisible by 2
  d3d4d5=063 is divisible by 3
  d4d5d6=635 is divisible by 5
  d5d6d7=357 is divisible by 7
  d6d7d8=572 is divisible by 11
  d7d8d9=728 is divisible by 13
  d8d9d10=289 is divisible by 17

  Find the sum of all 0 to 9 pandigital numbers with this property.
*/

var isPandigital = require('./pandigital');
var range = require('./range');
var sum = require('./helpers').sum;


var getPandigitals = function(n) {
  var digits = range(0, n);
  var pandigitals = [];

  (function recurse (arr, memo) {
    var current, memo = memo || [];

    for(var i = 0; i < arr.length; i++) {
      current = arr.splice(i, 1);
      if(arr.length === 0) {
        pandigitals.push(memo.concat(current).join(""));
      }
      recurse(arr.slice(), memo.concat(current));
      arr.splice(i, 0, current[0]);
    }

  })(digits);

  return pandigitals;
};

var isSubstringDivisable = function(number) {
  var divisors = [2,3,5,7,11,13,17];
  var numStr = ("" + number);
  var currentNum;
  for(var i = 1; i < numStr.length - 2; i++) {
    currentNum = numStr.slice(i, i+3);
    if(currentNum % divisors[i - 1] != 0) {
      return false;
    }
  }
  return true;
};

var getDivisablePandigitals = function() {
  var appropriatePangidigitals = [];
  var pandigitals = getPandigitals(9);
  pandigitals.forEach(function(pandigital) {
    if(isSubstringDivisable(pandigital)) {
      appropriatePangidigitals.push(pandigital);
    }
  });
  return appropriatePangidigitals;
};

console.log(sum(getDivisablePandigitals()));