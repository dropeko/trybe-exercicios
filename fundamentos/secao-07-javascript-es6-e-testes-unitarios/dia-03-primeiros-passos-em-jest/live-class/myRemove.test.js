const myRemove = require('./myRemove');

describe('Testes com a função myRemove', () => {

  test('Verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verificar se não retorna o array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verificar se retorna o array esperado 2', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });

});