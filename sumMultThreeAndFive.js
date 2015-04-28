var sumMultThreeAndFive = function(topNum) {
  var mults = [];
  for(var i = 3; i < topNum; i = i + 3) {
    mults.push(i);
  }
  for(var j = 5; j < topNum; j = j + 5) {
    if(j % 3) {
      mults.push(j);
    }
  }

  return mults.reduce(function(a,b) {
    return a + b;
  });
};

console.log(sumMultThreeAndFive(1000));