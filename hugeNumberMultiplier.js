var hugeNumberSummer = require('./hugeNumberSummer.js');

var hugeNumberMultiplier = function(num1Arr, num2Arr) {
  var result = num2Arr.slice();
  var counter = [1];
  if(sumDigits(num1Arr) === 0 || sumDigits(num2Arr) === 0) {
    return [0];
  }
  while(!shallowEquality(counter, num1Arr)) {
    if(num1Arr.length === 1 && num1Arr[0] === 1) {
      return result;
    }
    result = hugeNumberSummer(result, num2Arr);
    counter = hugeNumberSummer(counter, [1]);
  }
  return result;
};

var sumDigits = function(arr) {
  return arr.reduce(function(a,b) {
    return a + b;
  });
};

var shallowEquality = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(var i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
}

// console.log(hugeNumberMultiplier([0], [1]), 0);
// console.log(hugeNumberMultiplier([1], [1]), 1);
// console.log(hugeNumberMultiplier([2], [1]), 2);
// console.log(hugeNumberMultiplier([2], [4]), 8);
// console.log(hugeNumberMultiplier([9], [0, 1]), 90);
// console.log(hugeNumberMultiplier([0, 1], [0, 1]), 100);

module.exports = hugeNumberMultiplier;




