function fibsToDigit(numDigits) {
  var oldest = [1];
  var newest = [1];
  var count = 2;
  while(newest.length < numDigits) {
    var saveOld = newest.slice();
    newest = hugeNumberSummer(newest, oldest);
    oldest = saveOld;
    count++;
  }
  console.log(count)
  return newest;
}

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

// console.log(hugeNumberSummer([1,2,3],[1,2,4,5]), 321 + 5421);
// console.log(hugeNumberSummer([1,2,3,2],[1,2,4,5]), 2321 + 5421)
// console.log(hugeNumberSummer([8], [3, 1]), 8 + 13);
// console.log(hugeNumberSummer([3,1], [8]), 8 + 13);


console.log(fibsToDigit(1000).reverse().join("").length);

