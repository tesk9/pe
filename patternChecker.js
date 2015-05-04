var patternChecker = function(pattern, string) {
    var patternArr = pattern.split("");
    var stringArr = string.split("");
    var patternObj = occurrenceStorer(patternArr);
    var stringObj = occurrenceStorer(stringArr);
    var currentCharacter, currentPattern;
    var i = 0, j = 0;
    while(j < patternArr.length) {
      currentCharacter = stringArr[i];
      currentPattern = patternArr[j];

      if(stringObj[currentCharacter] !== patternObj[currentPattern]) {
        j++; // Increment pattern. (Don't increment place in string)
      } else {
        i++; // Increment place in string.
      }
    }
    if(i !== string.length) {
      return false;
    } else {
      return true;
    }
};

var occurrenceStorer = function(arr) {
    var occurrences = {};
    arr.forEach(function(patt) {
        occurrences[patt] = occurrences[patt] || 0;
        occurrences[patt]++;
    });
    return occurrences;
}

console.log(patternChecker("aba", "redblackred"), true); // true
console.log(patternChecker("aba", "redblackrudolph"), false); // false

console.log(patternChecker("abb", "redblackblack"), true); // true
console.log(patternChecker("aba", "redblackblac"), false); // false

console.log(patternChecker("abc", "abc"), true); // true
console.log(patternChecker("abc", "redblackred"), false); // false