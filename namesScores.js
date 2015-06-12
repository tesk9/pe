var fs = require('fs');

var letterScores = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
};

fs.readFile('./names.txt', 'utf-8', function(err, data) {
  var names = data.split(",");
  names = names.sort();
  var totalScore = 0;

  names.forEach(function(name, index) {
    var nameScore = 0;
    name.split("").forEach(function(letter) {
      if(letterScores[letter]) {
        nameScore += letterScores[letter];
      }
    });
    totalScore += (index+1) * nameScore;
  });
  console.log(totalScore);
});
