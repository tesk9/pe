/*
  Take the number 192 and multiply it by each of 1, 2, and 3:

  192 × 1 = 192
  192 × 2 = 384
  192 × 3 = 576
  By concatenating each product we get the 1 to 9 pandigital, 192384576. 
  We will call 192384576 the concatenated product of 192 and (1,2,3)

  The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, 
  and 5, giving the pandigital, 918273645, which is the concatenated product 
  of 9 and (1,2,3,4,5).

  What is the largest 1 to 9 pandigital 9-digit number that can be formed 
  as the concatenated product of an integer with (1,2, ... , n) where n > 1?
*/

var isPandigital = require('./pandigital');

var findPandigitalMultiples = function() {
  var integer = 987654322, integerStr;
  while(integer) {
    if(isPandigital(integer)) {

      // Check to see if meets base conditions
      integerStr = "" + integer;
      var baseNumberNumDigits = 1;
      var baseNumber, remainingNumber, nextNumber;

      // Check for multiple possible base numbers
      while(baseNumberNumDigits < integerStr.length) {
        baseNumber = +(integerStr.slice(0, baseNumberNumDigits));
        remainingNumber = integerStr.slice(baseNumberNumDigits);

        // Check for (1,2,..n) where n >= 2
        var n = 2, product, numProductDigits;
        while(n <= 9) {
          product = n * baseNumber;
          numProductDigits = ("" + product).length;
          nextNumber = remainingNumber.slice(0, numProductDigits);
          if(nextNumber != product) {
            break;
          } else {
            remainingNumber = remainingNumber.slice(numProductDigits);

            /* If we're out of number, we have found it! */
            if(!remainingNumber.length) {
              return integer;
            }

          }
          n++;
        }

        baseNumberNumDigits++;
      }

    }
    integer--;
  }
};

console.log(findPandigitalMultiples());
