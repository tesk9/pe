/*
  reverseSpiralMatrix takes in an n, ad then produces an nXn matrix with spiralling values
  i.e.,
  reverseSpiralMatrix(1) => [[1]]
  reverseSpiralMatrix(2) => [[1, 2], [4, 3]]
  reverseSpiralMatrix(3) => [[1, 2, 3], [8, 9, 4], [7, 6, 5]]

*/

var reverseSpiralMatrix = function(n) {
  var matrix = buildNXNMatrix(n);
  var counter = 1;
  var maxRow = n, maxCol = n;
  var minRow = 0, minCol = 0;
  while(minRow < maxRow) {
    var i = minRow;
    for(var j = minCol; j < maxCol; j++) {
      matrix[i][j] = counter++;
    }
    minRow++;
    i++, j--;

    for(var i = minRow; i < maxRow; i++) {
      matrix[i][j] = counter++;
    }
    maxCol--;
    i--;

    for(var j = maxCol - 1; j >= minCol; j--) {
      matrix[i][j] = counter++;
    }
    maxRow--;
    j++;

    for(var i = maxRow - 1; i >= minRow; i--) {
      matrix[i][j] = counter++;
    }
    minCol++;
  }
  console.log(matrix);
  return matrix;
};

var buildNXNMatrix = function(n) {
  var matrix = [];
  for(var i = 0; i < n; i++) {
    matrix.push([]);
    for(var j = 0; j < n; j++) {
      matrix[i].push(0);
    }
  }
  return matrix;
}

reverseSpiralMatrix(1);
reverseSpiralMatrix(2);
reverseSpiralMatrix(3);

