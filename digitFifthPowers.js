var digitPowerSums = function(power) {
  var digitPowersStore = digitPowers(power);
  var numDigitsSum;
  var sums = [];
  for(var num = 10; num < 150000000; num++) {
    numDigitsSum = ("" + num).split("").reduce(function(a,b) {
      return a + +(digitPowersStore[b]);
    }, 0);
    if(numDigitsSum == num) {
      sums.push(numDigitsSum);
    }
  }
  return sums.reduce(function(a,b) { return a + b; });
};

// Returns an object storing all digits 0 - 9 to the passed-in power
var digitPowers = function(power) {
  var digitPowersStore = {};
  for(var i = 0; i <= 9; i++) {
    digitPowersStore[i] = Math.pow(i, power);
  }
  return digitPowersStore;
};

console.log(digitPowerSums(5));
