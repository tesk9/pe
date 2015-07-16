var nthPentagonNumber = function(n) {
  return n * (3 * n - 1) / 2;
};

var pentagonalLookup = (function() {
  var largestPentagonal = 0;
  var largestN = 0;
  var store = {};

  return function(number) {
    while(number > largestPentagonal) {
      largestPentagonal = nthPentagonNumber(++largestN);
      store[largestPentagonal] = 1;
    }
    return !!store[number];
  };
})();

module.exports =  {
  nthPentagonNumber: nthPentagonNumber,
  pentagonalLookup: pentagonalLookup
}