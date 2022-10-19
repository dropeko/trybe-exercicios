const sum = require('./sum');

describe('Testes realizados com a função sum ->', () => {
  // Teste mais basico a ser feito. Verificar se existe um função!
  test('testa se existe a função sum', () => {
    expect(typeof sum).toBe('function')
  })

  test('testa se 4 + 5 é igual a: 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('testa se 0 + 0 é igual a: 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('testa se a função lança um erro.', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers')
  })

});