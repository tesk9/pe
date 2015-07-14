/*
  The fraction 49/98 is a curious fraction, as an inexperienced mathematician 
  in attempting to simplify it may incorrectly believe that 49/98 = 4/8
  (which is correct) is obtained by cancelling the 9s.

  We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

  There are exactly four non-trivial examples of this type of fraction, 
  less than one in value, and containing two digits in the numerator and 
  denominator.

  If the product of these four fractions is given in its lowest common terms, 
  find the value of the denominator.
*/

var digitCancellingFraction = function() {
  var fractions = {};

  function generateFractionCombinations () {
    for(var inCommon = 0; inCommon <= 9; inCommon++) {
      for(var diff1 = 0; diff1 <= 9; diff1++) {
        var numerator = "" + inCommon + diff1;
        handleNumerator(numerator, inCommon, diff1);
      }

      for(var diff1 = 0; diff1 <= 9; diff1++) {
        var numerator = "" + diff1 + inCommon;
        handleNumerator(numerator, inCommon, diff1);
      }
    }
  }

  function handleNumerator (numerator, inCommon, diff1) {
    // Only proceed for non-trivial numerators
    if(+(numerator) % 10 && +(numerator) > 9) {
      for(var diff2 = 0; diff2 <= 9; diff2++) {
        storeFrac(numerator, "" + inCommon + diff2, diff1, diff2);
      }

      for(var diff2 = 0; diff2 <= 9; diff2++) {
        storeFrac(numerator, "" + diff2 + inCommon, diff1, diff2);
      }
    }
  }

  function storeFrac (numerator, denominator, diff1, diff2) {
    if(denominator > numerator) {
      var frac = numerator + "/" + denominator;
      if(!fractions[frac]) {
        fractions[frac] = [+(numerator), +(denominator), diff1, diff2, frac];
      }
    }
  }

  return (function() {
    generateFractionCombinations();

    var results = [];
    for(var fraction in fractions) {
      var arr = fractions[fraction];
      if(arr[0] / arr[1] == arr[2] / arr[3]) {
        results.push(arr);
      }
    }
    var product = results.reduce(function(a,b) {
      return a * b[2] / b[3];
    }, 1);
    return product;
  })()
};



console.log(digitCancellingFraction());
