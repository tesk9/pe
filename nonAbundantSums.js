/* a number is abundant if the sum of its proper divisors is greater than the number.
   it is deficient if the sum of its proper divisors is less than it
   and n is perfect if the sum of n's proper divisors IS n

   Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers
   Note that all integers greater than 28123 can be written as the sum of two abundant numbers. */

var getFactors = require('./factorization.js');
var buildRange = require('./range.js');

var isAbundant = function(number) {
  var properDivisorSum = getFactors(number).reduce(function(a,b) {
    return a + b;
  }, 1);
  return properDivisorSum > number;
};

var abundantNumberLister = function(topNum) {
  var list = [], num = 1;
  while(num < topNum) {
    if(isAbundant(num)) {
      list.push(num);
    }
    num++;
  }
  return list;
};

// var sumsTwoAbundantNumbers = function(topNum) {
//   var integers = buildRange(topNum, true);
//   var abundantNumbers = abundantNumberLister(topNum);
//   abundantNumbers.forEach(function(number, ind) {
//     for(var i = 0; i < abundantNumbers.length; i++) {
//       var abundantSum = number + abundantNumbers[i];
//       if(abundantSum > topNum) {
//         break;
//       }
//       delete integers[abundantSum];
//     }
//   });
//
//   var totalSum = 0;
//   for(var num in integers) {
//     totalSum += +(num);
//   }
//
//   return totalSum;
// };

var sumsTwoAbundantNumbers = function(topNum) {
  var integers = buildRange(topNum);
  var abundantNumbers = abundantNumberLister(topNum);
  var sums = {};

  abundantNumbers.forEach(function(number, ind) {
    for(var i = ind; i < abundantNumbers.length; i++) {
      var abundantSum = number + abundantNumbers[i];
      if(abundantSum > topNum) {
        break;
      }
      sums[abundantSum] = true;
    }
  });

  var sumArr = [];
  var totalSum = 0;
  integers.forEach(function(val) {
    if(!sums[val]) {
      sumArr.push(val);
      totalSum += val;
    }
  });

  // return totalSum;
  return sumArr;
};

// console.log(isAbundant(3) === false); // true
// console.log(isAbundant(4) === false); // true
// console.log(isAbundant(12) === true); // true

// console.log(sumsTwoAbundantNumbers(28123), sumsTwoAbundantNumbers(30000));

// var test = 0, topNum = 25;
// for(var i = 0; i < topNum; i++) {
//   test += i;
// }
// console.log(sumsTwoAbundantNumbers(topNum), test);

sumsTwoAbundantNumbers(28123).forEach(function(val) {
  console.log(val);
});
