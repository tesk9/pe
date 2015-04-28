function evenFibs(topNum) {
  var fibs = [1,1], currentInd = 2;
  while(fibs[fibs.length - 1] < topNum) {
    fibs.push(fibs[currentInd - 1] + fibs[currentInd - 2]);
    currentInd++;
  }
  
  return fibs.reduce(function(a,b) {
    return !(b % 2) ? a + b : a;
  }, 0);
}

console.log(evenFibs(4000000));