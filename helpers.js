var objectify = function(arr, def) {
  def = def || 1;
  var obj = {};
  arr.forEach(function(val) {
    obj[val] = def;
  });
  return obj;
};

// Sums over object keys or over an array
var sum = function(obj) {
  var sum = 0;
  if(Array.isArray(obj)) {
    for(var i = 0; i < obj.length; i++) {
      sum += +(obj[i]);
    }
  } else {
    for(var key in obj) {
      sum += +(key);
    }
  }
  return sum;
};

module.exports = {
  objectify: objectify,
  sum: sum
};
