var nthHexagonNumber = function(n) {
  return n * (2* n - 1);
};

var hexagonalLookup = (function() {
  var largestHexagonal = 0;
  var largestN = 0;
  var store = {};

  return function(number) {
    while(number > largestHexagonal) {
      largestHexagonal = nthHexagonNumber(++largestN);
      store[largestHexagonal] = 1;
    }
    return !!store[number];
  };
})();

module.exports =  {
  nthHexagonNumber: nthHexagonNumber,
  hexagonalLookup: hexagonalLookup
}
