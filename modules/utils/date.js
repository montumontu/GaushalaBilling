const getNextMonth = ()=> {
  // Create an array of month names
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Get the current date
const currentDate = new Date();

// Get the next month
const nextMonth = new Date();
nextMonth.setMonth(currentDate.getMonth() + 1);

// Get the month and year of the next month
const nextMonthMonth = monthNames[nextMonth.getMonth()];

// Display the next month and year as text
console.log(`Next month is ${nextMonthMonth}`);
return nextMonthMonth;
}

module.exports = {
  getNextMonth,
}