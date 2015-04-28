function largestPalindrome(digits) {
  var getRange = function(digits) {
    var lowest = [1], highest = [9];
    for(var i = 1; i < digits; i++) {
      lowest.push(0);
      highest.push(9);
    }
    lowest = +lowest.join("");
    highest = +highest.join("");
    var lowestProduct = lowest * lowest;
    var highestProduct = highest * highest;
    return [lowest, highest, lowestProduct, highestProduct];
  };

  var isPalindrome = function(input) {
    return +input.toString(10).split("").reverse().join("") === input;
  };

  var getLargestPalindrome = function(factorRange) {
    var allPalindromes = [];
    for(var num1 = factorRange[1]; num1 > factorRange[0]; num1--) {
      for(var num2 = factorRange[1]; num2 > factorRange[0]; num2--) {
        if(isPalindrome(num1 * num2)) {
          allPalindromes.push(num1 * num2);
        }
      }
    }
    return Math.max.apply(null, allPalindromes);
  };

  var ranges = getRange(digits);
  return getLargestPalindrome(ranges.slice(0,2));
}

module.exports = largestPalindrome;