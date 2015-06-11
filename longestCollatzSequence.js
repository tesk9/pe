var _ = require('underscore');


var longestCollatzSequence1 = function(topNum) {
  var maxLength = 0, firstNum;
  for(var i = 2; i <= topNum; i++) {
    var collatz = collatzSequence(i);
    if(collatz > maxLength) {
      maxLength = collatz;
      firstNum = i;
    }
  }
  return ma
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


// console.log(longestCollatzSequence(10))
// console.log(longestCollatzSequence(100))
// console.log(longestCollatzSequence(1000))
// console.log(longestCollatzSequence(10000))
// console.log(longestCollatzSequence(100000))
// console.log(longestCollatzSequence(1000000))
/* ------------------------------------- */

var longestCollatzSequence = function(topNum) {
  var collatz = collatzSequenceIterative();
  for(var i = 0; i <= topNum; i++) {
    collatz.findSequenceLength(i);
  }
  return collatz.findMax();
};

var collatzSequenceIterative = function() {
  var storeLengths = {};
  return {
    findSequenceLength: function(startNum) {
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
          // console.log("Using memoized value", num, storeLengths[num]);
          num = 1;
        } else if(isEven(num)) {
          // n => n / 2
          num /= 2;
        } else {
          // n => 3 * n + 1
          num = 3 * num + 1;
        }
      }
    },
    findMax: function() {
      return _.max(storeLengths);
    }
  };
};

var isEven = function(num) {
  if(num % 2) {
    return false;
  }
  return true;
}

// console.log(longestCollatzSequence(100));
// console.log(longestCollatzSequence(1000));
// console.log(longestCollatzSequence(10000));
// console.log(longestCollatzSequence(100000));
// console.log(longestCollatzSequence(1000000));
// console.log(longestCollatzSequence(10000000));
// console.log(longestCollatzSequence(100000000));
// console.log(longestCollatzSequence(1000000000));
