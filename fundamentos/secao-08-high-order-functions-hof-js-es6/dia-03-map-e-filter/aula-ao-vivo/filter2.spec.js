const { filterNoDriver, users } = require('./filter2');

describe('The function filterNoDriver ', () => {
  it('is a function', () => {
    expect(typeof filterNoDriver).toBe('function');
  });

  it('returns people who are not drivers', () => {
    expect(filterNoDriver(users)).toEqual([
      { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
      { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
      { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
    ]);
  });
});