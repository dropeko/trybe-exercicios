// Crie uma função que some todos os parâmetros passados a ela.
// REST PARAMETER
const sumAll = (...numbers) => {
  return numbers.reduce((acc, number) => {
      return acc + number;
  });
  // return number1 + number2 + number3;
};

module.exports = {sumAll};