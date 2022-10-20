const encodeDecode = require('./encondeDecode');

describe('Testes com as funções encode/decode', () => {

  test('testando se encode é uma função', () => {
    expect(typeof encodeDecode.encode).toBe('function')
  });

  test('testando se Decode é uma função', () => {
    expect(typeof encodeDecode.decode).toBe('function')
  });

});