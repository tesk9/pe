var nthTriangleNumber = function(n) {
  return 1 / 2 * n * (n + 1);
};


var triangleLookup = (function() {
  var largestTriangle = 0;
  var largestN = 0;
  var store = {};

  return function(number) {
    while(number > largestTriangle) {
      largestTriangle = nthTriangleNumber(++largestN);
      store[largestTriangle] = 1;
    }
    return !!store[number];
  };
})();

module.exports = {
  nthTriangleNumber: nthTriangleNumber,
  triangleLookup: triangleLookup
};
