const bestGuyInTheWorld = {
  name: 'Rodrigo Hilbert',
  birthplace: 'Orleans, Santa Catarina',
  city: 'São Paulo',
  jobs: ['Ator', 'Modelo', 'Cozinheiro', 'Caçador', 'Sniper', 'Piloto de Caça']
};

// const name = bestGuyInTheWorld.name;
const { name, birthplace } = bestGuyInTheWorld;

// describe('testa concatenação de dados de um objeto', () => {
//   test('verifica se é possivel concatenar os dados do objeto bestGuyInTheWorld', () => {
//     expect(`${name} from ${birthplace}`)
//     .toBe('Rodrigo Hilbert from Orleans, Santa Catarina');
//   });
// });














// DESTRUCTURING


























// Pegando os 3 primeiros elementos do array de profissões
const { jobs } = bestGuyInTheWorld;
//console.log(jobs);

// pulando o primeiro elemento...
const [ , second, third ] = jobs;

// console.log( second, third);




























// Criando um objeto com os dois elementos do array
const obj = {
  second,
  third,
};

console.log(obj);