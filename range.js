var buildRange = function() {
  // determine whether we want an object or an array
  var args = [].slice.call(arguments);
  var rangeNums, startNum, topNum;

  if(args[1] === true || args[2] === true) {
    // We want an object returned to us
    rangeNums = {};

    if(arguments.length === 2) {
      // Start value defaults to 1
      start = 1;
      topNum = args[0];
    } else {
      // Start value provided
      start = args[0];
      topNum = args[1];
    }

    // build range object
    for(; start <= topNum; start++) {
      rangeNums[start] = true;
    }

  } else {
    // We want an array returned to us
    rangeNums = [];

    if(arguments.length === 1) {
      // Start value defaults to 1
      start = 1;
      topNum = args[0];
    } else {
      // Start value provided
      start = args[0];
      topNum = args[1];
    }

    for(; start <= topNum; start++) {
      rangeNums.push(start);
    }
  }

  return rangeNums;
}

module.exports = buildRange;