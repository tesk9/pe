var triangle = require('./triangleNumber').nthTriangleNumber;
var pentagon = require('./pentagonNumber').nthPentagonNumber;
var hexagon = require('./hexagonNumber').nthHexagonNumber;

var findTriangularPentagonalHexagonalNumber = function(minInd) {
  var triangleInd = minInd || 1, pentagonInd = minInd || 1; hexagonInd = minInd || 1;
  var ntriangle, npentagon, nhexagon;

  while(true) {
    ntriangle = triangle(triangleInd);
    nhexagon = hexagon(hexagonInd);
    npentagon = pentagon(pentagonInd);

    // Base Condition
    if(ntriangle === npentagon && npentagon === nhexagon) {
      return ntriangle;
    }

    if(ntriangle < npentagon) {
      triangleInd++;
    } else if(npentagon < nhexagon) {
      pentagonInd++;
    } else if(nhexagon < ntriangle) {
      hexagonInd++;
    }

  }

};

console.log(findTriangularPentagonalHexagonalNumber(285));