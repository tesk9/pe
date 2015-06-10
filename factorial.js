var factorial = function(top, bottom) {
  var res = 1, bottom = bottom || 1;
  while(top > bottom) {
    res *= top;
    top--;
  }
  return res;
};

module.exports = factorial;