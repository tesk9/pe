/* 
  You are given the following information, but you may prefer to do some research for yourself.

  1 Jan 1900 was a Monday.
  Thirty days has September,  9
  April, June and November.  4 6 11
  All the rest have thirty-one,
  Saving February alone,
  Which has twenty-eight, rain or shine.
  And on leap years, twenty-nine.
  A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

  How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

// How many Sundays were there between 1 Jan 1901 and 31 Dec 2000?

// How many of these Sundays fell on the first of the month?

var thirtyOne = function(year) {
  return 31;
};

var thirty = function(year) {
  return 30;
};

var monthToDays = {
  1: thirtyOne,
  2: function(year) {
    if(!(year % 4)) {
      if(!(year % 100)) {
        return !(year % 400) ? 29 : 28;
      }
      return 29;
    }
    return 28;
  },
  3: thirtyOne,
  4: thirty,
  5: thirtyOne,
  6: thirty,
  7: thirtyOne,
  8: thirty,
  9: thirtyOne,
  10: thirtyOne,
  11: thirty,
  12: thirtyOne
};

console.log(monthToDays['2'](1) === 28);
console.log(monthToDays['2'](4) === 29);
console.log(monthToDays['2'](100) === 28);
console.log(monthToDays['2'](400) === 29);


