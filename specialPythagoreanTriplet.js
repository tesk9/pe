// There exists exactly one set of a,b,c such that a^2 + b^2 = c^2 and a + b + c = 1000

var specialPythagoreanTriplet = function() {
  var c;
  for(var a = 1; a < 1000; a++) {
    for(var b = 1; b < 1000; b++) {
      c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if(a + b + c === 1000) {
        return a * b * c;
      }
    }
  }
}

console.log(specialPythagoreanTriplet());