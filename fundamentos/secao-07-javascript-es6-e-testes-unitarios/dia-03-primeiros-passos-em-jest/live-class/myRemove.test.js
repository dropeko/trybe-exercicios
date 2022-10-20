const myRemove = require('./myRemove');

describe('Testes com a função myRemove', () => {
  test('Verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});