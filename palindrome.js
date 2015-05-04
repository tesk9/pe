var isPossiblePalindrome = function(string) {
  var letters = string.split("");
  var letterObj = {};
  letters.forEach(function(val) {
    letterObj[val] = letterObj[val] ? ++letterObj[val] : 1;
  });
  var oddLetterCount = 0;
  for(var letter in letterObj) {
    if(letterObj[letter] % 2) {
      oddLetterCount++;
    }
  }
  return oddLetterCount === 1 || oddLetterCount === 0;
};

console.log(isPossiblePalindrome("race")); // false
console.log(isPossiblePalindrome("racecar")); // true
console.log(isPossiblePalindrome("rraccea")); // true