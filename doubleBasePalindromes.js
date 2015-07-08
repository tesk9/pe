var isPalindrome = function(input) {
  return ("" + input).split("").reverse().join("") == input;
};

var isDoubleBasePalindrome = function(num) {
  var binaryNum = num.toString(2);
  return isPalindrome(num) && isPalindrome(binaryNum);
};

var sumDoubleBasePalindromes = function(topNum) {
  var sum = 0;
  for(var i = 0; i < topNum; i++) {
    if(isDoubleBasePalindrome(i)) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumDoubleBasePalindromes(1000000));
