const myFizzBuzz = require('./myFizzBuzz');

describe('Testes com a função FizzBuzz', () => {

  test('Verifica se é divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  });

  test('Verifica se é divisivel por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  });

  test('Verifica se é divisivel por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  });
  
});