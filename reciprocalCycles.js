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

      if(list[list.length - 2] === char) {
        recurrentCycle = char;
        return;
      }

      var midPoint = Math.floor(list.length/2);
      for(var i = 0; i < midPoint; i++) {
        var comboLeft = list.slice(i, midPoint).join("");
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

var toDecimalFromUnitFraction = function(numerator, denominator, number, sequences) {
  number = (number !== undefined) ? number : ["0."];
  sequences = sequences || sequenceHolder();
  var quotient = numerator / denominator;

  number.push(Math.floor(numerator * 10 / denominator));

  sequences.addToSequence(number[number.length - 1]);

  var recurrentCycle = sequences.cycle();
  if(recurrentCycle) {
    number.pop();
    number.push("(" + recurrentCycle + ")");
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

var reciprocalCycles = function() {
  var maxCycle = 0, d = 1;
  for(var i = 2; i <= 1000; i++) {
    var cycle = getReciprocalCycle(1, i);
    if(cycle && cycle.length > maxCycle) {
      maxCycle = cycle.length;
      d = i;
      console.log(d, cycle)
    }
  }
  return d;
};

var getReciprocalCycle = function(numerator, denominator, number, sequences) {
  number = (number !== undefined) ? number : ["0."];
  sequences = sequences || sequenceHolder();
  var quotient = numerator / denominator;

  number.push(Math.floor(numerator * 10 / denominator));

  sequences.addToSequence(number[number.length - 1]);

  var recurrentCycle = sequences.cycle();
  if(recurrentCycle) {
    return recurrentCycle;
  }

  var diff = numerator * 10 / denominator - Math.floor(numerator * 10 / denominator);
  if(diff) {
    if(!recurrentCycle) {
      return getReciprocalCycle(diff, 1, number, sequences);
    }
  }
};

console.log(reciprocalCycles());
