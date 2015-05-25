var numberToWord = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var digitsToPlace = {
  3: 'hundred',
  4: 'thousand'
};

var numberToEnglish = function(number) {
  number = number.toString(10).split("")
  var inEnglish = [];
  if(digitsToPlace[number.length]) {
    inEnglish.push(numberToWord[number[0]]);
    inEnglish.push(digitsToPlace[number.length]);
    if(number.length === 3) {
      if(number[1] !== "0" || number[2] !== "0") { inEnglish.push("and"); }
      inEnglish.push(numberToEnglish(number.slice(1).join("")));
    }
  } else if(number.length == 2 && number[0] !== "1") { 
    inEnglish.push(numberToWord[number[0] + "0"]);
    inEnglish.push(numberToWord[number[1]]);
  } else if (number.length == 2 && number[0] === "1") {
    inEnglish.push(numberToWord[number[0] + number[1]]);
  } else if(number.length === 1) {
    inEnglish.push(numberToWord[number[0]]);
  }
  return inEnglish.join("");
};

var letterCount = 0, num;
for(var i = 1; i <= 1000; i++) {
  num = numberToEnglish(i);
  // console.log(num);
  letterCount += num.length;
}
console.log(letterCount);