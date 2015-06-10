var hugeNumberSummer = function(num1Arr, num2Arr) {
  // Ones digit on the left, dollface :)
  var sumArr = [];

  for(var ind = 0; ind < Math.max(num1Arr.length, num2Arr.length); ind++) {
    var sum = (num1Arr[ind] !== undefined ? num1Arr[ind] : 0) + (num2Arr[ind] !== undefined ? num2Arr[ind] : 0) + (sumArr[ind] !== undefined ? sumArr[ind] : 0);
    if(sum > 9) {
      sumArr[ind] = +(sum.toString(10)[1]);
      if(sumArr[ind+1] !== undefined) {
        sumArr[ind+1] += 1;
      } else {
        sumArr.push(1);
      }
    } else {
      sumArr[ind] = sum;
    }
  }

  return sumArr;
};

module.exports = hugeNumberSummer;