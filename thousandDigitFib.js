function fibsToDigit(numDigits) {
  var oldest = [1];
  var newest = [1];
  var count = 0;
  while(newest.toString(10).length < numDigits) {
    oldest ^= newest;
    newest ^= oldest;
    oldest ^= newest;
    newest += oldest;
    count++;
    console.log(newest)
  }
  
  return newest;
}

var hugeNumberSummer = function(num1Arr, num2Arr) {
  // Ones digit on the left, dollface :)
  // Note that this function modifies num1Arr

  //TODO: less ugly solution to uneven-length arrays
  while(num2Arr.length > num1Arr.length) {
    num1Arr.push(0);
  }
  while(num2Arr.length < num1Arr.length) {
    num2Arr.push(0);
  }

  num1Arr.forEach(function(digit, ind, arr) {
    var sum = digit + num2Arr[ind];
    if(sum > 9) {
      if(arr[ind+1]) {
        arr[ind+1]++;
      } else {
        arr.push(1);
      }
      arr[ind] = +(sum.toString(10)[1]);
    } else {
      arr[ind] = sum;
    }
  });

  // num1Arr now represents the sum
  return num1Arr;
};

// console.log(fibsToDigit(100));
console.log(hugeNumberSummer([1,2,3],[1,2,4,5]), 321 + 5421);
console.log(hugeNumberSummer([1,2,3,2],[1,2,4,5]), 2321 + 5421)


