var longestCollatzSequence = function(topNum) {
  var maxLength = 0, currentLength, maxStart;
  var collatz = collatzSequenceIterative();
  for(var i = 0; i <= topNum; i++) {
    collatz(i);
  }
  return maxStart;
};

var collatzSequence = function(startNum, sequence) {
  sequence = sequence || [];
  sequence.push(startNum);
  if(startNum === 1) {
    // base case
    return sequence;
  }
  if(isEven(startNum)) {
    // n => n / 2
    return collatzSequence(startNum / 2, sequence);
  } else {
    // n => 3 * n + 1
    return collatzSequence(3 * startNum + 1, sequence);
  }
};

var collatzSequenceIterative = function() {
  var storeLengths = {}
  return function(startNum) {
    var counter = 0, num = startNum;
    while(num) {
      counter++;
      if(num === 1) {
        // base case
        storeLengths[startNum] = counter;
        return counter;
      }
      if(storeLengths[num]) {
        // use memoized value
        counter += storeLengths[num];
        console.log("Using memoized value", num, storeLengths[num]);
        num = 1;
      } else if(isEven(num)) {
        // n => n / 2
        num /= 2;
      } else {
        // n => 3 * n + 1
        num = 3 * num + 1;
      }
    }
  }
};

var isEven = function(num) {
  if(num % 2) {
    return false;
  }
  return true;
}

console.log(longestCollatzSequence(100));
// console.log(collatzSequenceIterative(1000000000));
