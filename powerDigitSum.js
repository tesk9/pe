
var powerDigitSum = function(power, digits) {
  digits = digits || [2];

  var doubler = function() {
    // double all values
    digits.forEach(function(v,i,a) {
      a[i] = v * 2;
    });

    // Handle overflow
    var i = 0; 
    while(i < digits.length) {
      // If digits[i] is bigger than a digit, increment next order
      if(digits[i] > 9) {
        digits[i] -= 10;
        if(digits[i + 1]) {
          digits[i + 1] += 1;
        } else {
          digits[i + 1] = 1;
        }
      }      
      // Increment i
      i++;    
    }

  };

  while(power > 1) {
    // TODO: More efficient exponentiation-- divide by two & such
    power -= 1;
    doubler();
  }

  return digits.reduce(function(a,b) {
    return a + b;
  });
};

console.log(powerDigitSum(15));

console.log(powerDigitSum(1000));