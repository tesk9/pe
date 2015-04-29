// Concerning the difference between sum of squares and square of sum

var Range = require('./range.js');

var sumSquareDifference = function(topNum) {
  var range = Range(topNum);

  var sumSquares = function() {
    var res = 0;
    range.forEach(function(num) {
      res += num * num;
    });
    return res;
  };

  var squareSum = function() {
    var res = range.reduce(function(num1, num2) {
      return num1 + num2;
    });
    return res * res;
  };

  return squareSum() - sumSquares();
};

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(100));