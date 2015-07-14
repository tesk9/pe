/*
  If p is the perimeter of a right angle triangle with integral length sides, 
  {a,b,c}, there are exactly three solutions for p = 120.

  {20,48,52}, {24,45,51}, {30,40,50}

  For which value of p ≤ 1000, is the number of solutions maximised?
*/

/* 
  Returns all right angle triangle side length possibilities for the
  given perimeter
*/
var rightAngleTriangles = function(p) {
  var a = 1, b = 1, c = 3;
  var solutions = [];
  var isSolution = combinedEquations(p);

  while(b < p / 2) {
    while(a < b) {
      c = Math.sqrt(a*a + b*b);
      if(isSolution(a, b)) {
        solutions.push([a, b, c]);
      }
      a++;
    }
    a = 1;
    b++;
  }

  return solutions;
};

/*
  using a^2 + b^2 = c^2 and a + b + c = p, returns a function that evaluates
  whether some a,b combination is a valid solution
*/
function combinedEquations (p) {
  return function(a,b) {
    return a + b + Math.sqrt(a * a + b * b) === p;
  }
};

var getMaxSolutions = function(topNum) {
  var maxSols = 0, currentSols;
  var pWithMaxSols;
  for(var p = 0; p <= topNum; p++) {
    currentSols = rightAngleTriangles(p).length;
    if(currentSols > maxSols) {
      maxSols = currentSols;
      pWithMaxSols = p;
    }
  }
  return pWithMaxSols;
};

console.log(getMaxSolutions(1000));

