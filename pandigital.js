var isPandigital = function(number) {
  var digitStorer = {};
  var numberStr = "" + number;
  for(var i = 0; i < numberStr.length; i++) {
    digitStorer[numberStr[i]] = true;
  }
  for(var i = 1; i <= numberStr.length; i++) {
    if(!digitStorer[i]) {
      return false;
    }
  }
  return true;
};

module.exports = isPandigital;