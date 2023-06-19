const { question, questionInt } = require('readline-sync');

const name = question('Qual o seu nome: ');
const age = questionInt('Qual sua idade: ');


console.log(`Hello, ${name}! Your age is ${age} years!`);