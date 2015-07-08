var distinctPowers = function(topBound) {
  var a = 2, b = 2, powers = {};
  while(a <= topBound) {
    while(b <= topBound) {
      powers[Math.pow(a,b)] = 1;
      b++;
    }
    b = 2;
    a++;
  }
  return Object.keys(powers);
};

console.log(distinctPowers(5).length === 15);
// console.log(distinctPowers(100))
