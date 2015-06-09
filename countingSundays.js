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

var isLeapYear = function(year) {
  if(!(year % 4)) {
    if(!(year % 100)) {
      return !(year % 400) ? true : false;
    }
    return true;
  }
  return false;
}

var thirtyOne = function() {
  return 31;
};

var thirty = function() {
  return 30;
};

var daysInYear = function(year) {
  return isLeapYear(year) ? 366 : 365;
};

var monthToDays = {
  1: thirtyOne,
  2: function(year) {
    return isLeapYear(year) ? 29 : 28;
  },
  3: thirtyOne,
  4: thirty,
  5: thirtyOne,
  6: thirty,
  7: thirtyOne,
  8: thirtyOne,
  9: thirty,
  10: thirtyOne,
  11: thirty,
  12: thirtyOne
};

var isSunday = function(daysFromBeginningOfTime) {
  // the beginning of time begins at Jan 1 1900, which was a Monday :)
  var beginningOfTime = 0;
  if(!((daysFromBeginningOfTime - beginningOfTime) % 7)) {
    return true;
  }
};

var sundays = function(startYear, endYear) {
  var counter = 0;
  var year = startYear;
  var month = 1, dayInMonth = 1;
  var daysInMonth = monthToDays[month](year);
  var totalDays = 1;
  while(year < endYear) {
    for(var day = 1; day <= daysInYear(year); day++, dayInMonth++, totalDays++) {
      if(dayInMonth === 1 && isSunday(totalDays)) {
        counter++;
      }
      if(dayInMonth >= daysInMonth) {
        dayInMonth = 0;
        month++;
        if(month > 12) {
          year++;
          month = 1;
        }
        daysInMonth = monthToDays[month](year);
      }

    }
  }
  return counter;
}
console.log(sundays(1900, 2001) - sundays(1900, 1901));