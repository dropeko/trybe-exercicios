const { numbersReduce } = require('./reduce1');

describe('Testa a função numbersReduce', () => {
  it('returns zero to empty array', () => {
    expect(numbersReduce([])).toBe(0);
  })
});