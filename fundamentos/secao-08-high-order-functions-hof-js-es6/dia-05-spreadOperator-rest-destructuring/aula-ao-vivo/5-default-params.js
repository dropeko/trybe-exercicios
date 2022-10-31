// Faça uma função que receba um número e retorne esse número multiplicado por um fator. Se nenhum fator for passado, a função deve retornar o número multiplicado por 1.

const multiply = (number, factor = 1) =>  number * factor;

module.exports = { multiply };