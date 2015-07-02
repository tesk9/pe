/*
  The lexicographic permutations of 0, 1, and 2 are:
    012 021 102 120 201 210

  What is the millionth lexicographic permutation of the
  digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9?
*/

var factorial = require("./factorial");

var generateLexicographicPermutations = function(digits) {
  var digitsArr = ("" + digits).split("").sort(function(a,b) { return a > b });
  var combo = [];
  var allCombos = [];

  var permute = function(input) {
    for(var i = 0; i < input.length; i++) {
      var charac = input.splice(i, 1)[0];
      combo.push(charac);
      if(input.length === 0) {
        allCombos.push(combo.slice());
      }
      permute(input);
      input.splice(i, 0, charac);
      combo.pop();
    }
    return allCombos;
  }

  return permute(digitsArr);
};

var results = generateLexicographicPermutations('0123456789');
console.log(results[999999].join(""));
