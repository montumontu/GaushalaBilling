

// nextMonth.js

const DateUtils = require("./currentMonth");

class NextMonth {
  constructor() {
    this.dateUtilsObj = new DateUtils();
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }
  
  get() {
    // Get the next month
    const currentMonth = this.dateUtilsObj.getCurrentMonth(false);
    console.log(currentMonth);

    // Get the month and year of the next month
    const nextMonthMonth = this.monthNames[currentMonth];
    console.log(nextMonthMonth);

    // Display the next month and year as text
    console.log(`Next month is ${nextMonthMonth}`);
    return nextMonthMonth;
  }
}

module.exports = NextMonth;