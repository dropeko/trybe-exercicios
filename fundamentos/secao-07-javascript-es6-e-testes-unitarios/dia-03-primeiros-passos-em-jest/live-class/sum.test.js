const sum = require('./sum');

describe('Testes realizados com a função sum ->', () => {
  test('testa se 4 + 5 é igual a: 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
})