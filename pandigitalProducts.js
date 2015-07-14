/*
We shall say that an n-digit number is pandigital 
if it makes use of all the digits 1 to n exactly once; 
for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, 
containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity 
can be written as a 1 through 9 pandigital.
*/


var isPandigital = function(num) {
  var store = {};
  var numArr = ("" + num).split("");
  numArr.forEach(function(digit) {
    store[digit] = 1;
  });
  for(var i = 1; i <= numArr.length; i++) {
    if(!store[i]) {
      return false;
    }
  }
  return true;
};

var findPandigitalProducts = function() {
  var products = {};
  for(var multiplicand = 1; multiplicand < 8000; multiplicand++) {
    var multiplicandLookup = objectifyIfNoRepetitions(multiplicand);
    
    // If there are no repetitions, enter the while-loop
    if(multiplicandLookup) {
      var incrementer = incrementWithoutReps(multiplicandLookup, multiplicand);
      var multiplier = 1;

      while(multiplier < multiplicand) {
        var product = multiplicand * multiplier;

        if(isPandigital("" + multiplicand + multiplier + product)) {
          products[product] = 1;
        }
        multiplier = incrementer(multiplier);
      }

    }

  }

  return Object.keys(products).reduce(function(a,b) {
    return a + +(b);
  }, 0);
};

var objectifyIfNoRepetitions = function(number) {
  var store = {};
  var num = ("" + number).split("");
  for(var i = 0; i < num.length; i++) {
    if(store[num[i]]) {
      return false;
    }
    store[num[i]] = 1;
  }
  if(store[0]) {
    return false;
  }
  return store;
};

var incrementWithoutReps = function(multiplicandStore, multiplicand) {
  return function recurse(current) {
    current++;
    var currentStore = {};
    var currentArr = ("" + current).split("");
    for(var i = 0; i < currentArr.length; i++) {
      /* If there are repititions when comparing 
         with the multiplicand store or
         with the currentStore, increment current */
      if(currentStore[currentArr[i]] || multiplicandStore[currentArr[i]]) {
        if(current > multiplicand) {
          return multiplicand++;
        }
        return recurse(current);
      }
      currentStore[currentArr[i]] = 1;
    }
    if(currentStore[0]) {
      return recurse(current);
    }
    return current;
  }
};


console.log(findPandigitalProducts());
