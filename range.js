var buildRange = function(start, topNumber) {
  var rangeNums = [];
  if(topNumber === undefined) {
    topNumber = start;
    start = 1;
  }
  for(var i = start; i <= topNumber; i++) {
    rangeNums.push(i);
  }
  return rangeNums;
}

module.exports = buildRange;