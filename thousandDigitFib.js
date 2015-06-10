var hugeNumberSummer = require('./hugeNumberSummer.js');

function fibsToDigit(numDigits) {
  var oldest = [1];
  var newest = [1];
  var count = 2;
  while(newest.length < numDigits) {
    var saveOld = newest.slice();
    newest = hugeNumberSummer(newest, oldest);
    oldest = saveOld;
    count++;
  }
  console.log(count)
  return newest;
}



// console.log(hugeNumberSummer([1,2,3],[1,2,4,5]), 321 + 5421);
// console.log(hugeNumberSummer([1,2,3,2],[1,2,4,5]), 2321 + 5421)
// console.log(hugeNumberSummer([8], [3, 1]), 8 + 13);
// console.log(hugeNumberSummer([3,1], [8]), 8 + 13);


console.log(fibsToDigit(1000).reverse().join("").length);

