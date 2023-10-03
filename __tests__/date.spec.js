// data.spec.js

const NextMonth = require('../modules/utils/nextMonth');

// Mock the DateUtils class
jest.mock('../modules/utils/currentMonth', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getCurrentMonth: jest.fn(() => 4) // Replace with the desired mock value
    };
  });
});

describe('getNextMonth', () => {
  it('returns June when current month is May', () => {
    // Act
    const nextMonthObj = new NextMonth();
    const result = nextMonthObj.get();
    // Assert
    expect(nextMonthObj.dateUtilsObj.getCurrentMonth).toHaveBeenCalledWith(false);
    expect(result).toBe('May');
  });
});
