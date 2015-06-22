var hugeNumberSummer = require('./hugeNumberSummer.js');

var hugeNumberMultiplier = function(num1Arr, num2Arr) {
  var result = num2Arr.slice();
  var counter = [1];
  while(!shallowEquality(counter, num1Arr)) {
    if(num1Arr.length === 1 && num1Arr[0] === 1) {
      return result;
    }
    result = hugeNumberSummer(result, num2Arr);
    counter = hugeNumberSummer(counter, [1]);
  }
  return result;
};

var shallowEquality = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(var i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = hugeNumberMultiplier;
