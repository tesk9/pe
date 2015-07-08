var objectify = function(arr, def) {
  def = def || 1;
  var obj = {};
  arr.forEach(function(val) {
    obj[val] = def;
  });
  return obj;
};

module.exports = (function() {
  return {
    objectify: objectify
  };
})();
