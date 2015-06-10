/* On an nXn grid, how many routes from top left corner 
   to bottom right corner, only moving down & right? */
var factorial = require('./factorial.js');
var latticePaths = function(n) {
  n++;
  var counter = 0, board = Board(n);

  var recurse = function(rowInd, colInd) {
    if(colInd === n - 1 && rowInd === n - 1) {
      counter++;
    }

    if(board.onBoard(rowInd+1, colInd) && !board.hasBeenVisited(rowInd+1, colInd)) {
      board.togglePiece(rowInd+1, colInd);
      recurse(rowInd+1, colInd)
      board.togglePiece(rowInd+1, colInd);
    }

    if(board.onBoard(rowInd, colInd+1) && !board.hasBeenVisited(rowInd, colInd+1)) {
      board.togglePiece(rowInd, colInd+1);
      recurse(rowInd, colInd+1)
      board.togglePiece(rowInd, colInd+1);
    }
  };

  board.togglePiece(0,0);
  recurse(0,0)

  return counter;
};

var Board = function(n) {
  var board = [], row = [];
  for(var j = 0; j < n; j++) {
    row.push(0);
  }
  for(var i = 0; i < n; i++) {
    board.push(row.slice());
  }
  return {
    togglePiece: function(row, col) {
      board[row][col] = +!board[row][col];
    },
    onBoard: function(row, col) {
      return row >= 0 && row < n && col >= 0 && col < n;
    },
    hasBeenVisited: function(row, col) {
      return board[row][col];
    },
    board: board.slice()
  };
};

console.log(latticePaths(2));
// console.log(latticePaths(10));

var mathyLatticePaths = function(n) {
  // (2n)! / (n! X n!)
  var numerator = factorial(2*n, n);
  var nFactorial = factorial(n);
  return numerator / nFactorial;
};

console.log(mathyLatticePaths(20));