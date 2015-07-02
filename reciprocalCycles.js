/*
  Find the value of d < 1000 for which 1/d contains the
  longest recurring cycle in its decimal fraction part
*/

var sequenceHolder = function() {
  var list = [];
  var recurrentCycle;
  return {
    cycle: function() {
      return recurrentCycle;
    },
    addToSequence: function(char) {
      list.push(char);

      var midPoint = Math.floor(list.length/2);
      for(var i = 0; i < midPoint; i++) {
        var comboLeft = list.slice(i, midPoint + 1).join("");
        for(var j = list.length - 1; j >= midPoint; j--) {
          var comboRight = list.slice(j).join("");
          if(comboLeft === comboRight && comboLeft.length >= j - i) {
            recurrentCycle = comboRight;
          }
        }
      }
    }
  }
};

//
// var seq = sequenceHolder();
// seq.addToSequence(1);
// seq.addToSequence(6);
// seq.addToSequence(6);
// seq.addToSequence(6);
// seq.addToSequence(6);
//
// console.log(seq.cycle());


var toDecimalFromUnitFraction = function(numerator, denominator, number, sequences) {
  number = (number !== undefined) ? number : ["0."];
  sequences = sequences || sequenceHolder();
  var quotient = numerator / denominator;

  number.push(Math.floor(numerator * 10 / denominator));

  sequences.addToSequence(number[number.length - 1]);

  var recurrentCycle = sequences.cycle();
  if(recurrentCycle) {
    console.log("RECURRENT", recurrentCycle);
  }

  var diff = numerator * 10 / denominator - Math.floor(numerator * 10 / denominator);
  if(diff) {
    if(!recurrentCycle) {
      toDecimalFromUnitFraction(diff, 1, number, sequences);
    }
  }

  return number.join("");
};

// console.log(toDecimalFromUnitFraction(1,2), .5);
// console.log(toDecimalFromUnitFraction(1,3), .33);
// console.log(toDecimalFromUnitFraction(1,4), .25);
// console.log(toDecimalFromUnitFraction(1,5), .2)
// console.log(toDecimalFromUnitFraction(1,6), '.1(6)');
// console.log(toDecimalFromUnitFraction(1,7), '.(142857)');
// console.log(toDecimalFromUnitFraction(1,8), .125);
// console.log(toDecimalFromUnitFraction(1,9), '.(1)');
// console.log(toDecimalFromUnitFraction(1,10), .1)
