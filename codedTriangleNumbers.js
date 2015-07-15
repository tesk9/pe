/*
  The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); 
  so the first ten triangle numbers are:

  1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

  By converting each letter in a word to a number corresponding to its 
  alphabetical position and adding these values we form a word value. 
  For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. 
  If the word value is a triangle number then we shall call the word a 
  triangle word.

  How many of the words in codedTriangleNumbers.txt are triangle numbers?
*/

var fs = require('fs');
var nthTriangleNumber = require('./triangleNumber');

var letterDictionary = {};
'ABCDEFGHIJKLMNOPQRSTUVWXY'.split("").forEach(function(letter, ind) {
  letterDictionary[letter] = nthTriangleNumber(ind + 1);
});

var triangleNumberLookup = (function() {
  var triangleNumbers = {};
  var largestTriangleNumber = 0;
  var largestN = 0;

  return function(number) {
    while(number > largestTriangleNumber) {
      largestTriangleNumber = nthTriangleNumber(largestN++);
      triangleNumbers[largestTriangleNumber] = 1;
    }
    return !!triangleNumbers[number];
  };

})();

fs.readFile('./codedTriangleNumbers.txt', function(err, data) {
  var triangleWordCount = 0;

  var words = data.toString().split(',');
  words.forEach(function(word) {

    var wordSum = 0;
    word.split("").forEach(function(letter) {
      wordSum += letterDictionary[letter] ? letterDictionary[letter] : 0;
    });

    if(triangleNumberLookup(wordSum)) {
      console.log(word, wordSum)
      triangleWordCount++;
    }
    console.log(triangleWordCount)
  });

  console.log(triangleWordCount);
});