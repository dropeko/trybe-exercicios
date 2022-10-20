const encodeDecode = require('./encondeDecode');

describe('Testes com as funções encode/decode', () => {

  test('testando se encode é uma função', () => {
    expect(typeof encodeDecode.encode).toBe('function')
  });

  test('testando se Decode é uma função', () => {
    expect(typeof encodeDecode.decode).toBe('function')
  });

  test('Teste se "aeiou" retorna "12345"', () => {
    expect(encodeDecode.encode('aeiou')).toBe('12345')
  });

  test('Teste se "12345" retorna "aeiou"', () => {
    expect(encodeDecode.decode('12345')).toBe('aeiou')
  });

});