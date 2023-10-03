

// currentMonth.js

class CurrentMonth {
  getCurrentMonth(check = true) {
    // Get the current date
    const currentDate = new Date();
    const nextMonth = new Date();
    console.log(currentDate.getMonth());
    nextMonth.setMonth(currentDate.getMonth() + 1);
    return nextMonth.getMonth();
  }
}

module.exports = CurrentMonth;