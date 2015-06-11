var longestCollatzSequence = function(topNumber) {
  var longest = 1, longestStarting = 1;
  var currentNum = 1, currentLength;
  while(currentNum < topNumber) {
    currentLength = findCollatzSequence(currentNum).length;
    if(currentLength > longest) {
      longestStarting = currentNum;
      longest = currentLength;
    }
    currentNum++;
  }
  return longestStarting;
};

var findCollatzSequence = function(startingNumber) {
  var sequence = [];
  while(startingNumber > 1) {
    sequence.push(startingNumber);
    if(isEven(startingNumber)) {
      startingNumber /= 2;
    } else {
      startingNumber = 3 * startingNumber + 1;
    }
  }
  sequence.push(1);
  return sequence;
};

var isEven = function(number) {
  return !(number % 2);
};

console.log(longestCollatzSequence(1000000));
