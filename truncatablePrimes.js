var primeSieve = require('./sieveOfErastothanes');

var truncatablePrimes = function() {
  
};

var truncate = function(input) {
  var combinations = [];
  var elements = ("" + input).split("");
  for(var i = 0; i < elements.length; i++) {
    combinations.push(elements.slice(i));
    combinations.push(elements.slice(0, i + 1));
  }
  return combinations;
};

