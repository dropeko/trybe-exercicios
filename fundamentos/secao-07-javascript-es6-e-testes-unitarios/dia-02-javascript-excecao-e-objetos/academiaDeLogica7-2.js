const verificaPar = (num) => num % 2 === 0 && console.log(`o valor ${num} é par!`);

verificaPar(5);

// ---------------------------------------------------------------------------------------

// Escreva uma função que dado um parâmetro retorna se o tipo de dado é Number.
const array = [7, 8, 6, 4, 3, 2, 1, 77, 88]

const somaPar = (array) => {
  let somador = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0 ){
      somador += array[index];
    }    
  }
  return somador
}

console.log(somaPar(array));

// ---------------------------------------------------------------------------------------

// Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem: "Boas vindas, USERNAME!". Valide que o tipo de dado seja string e o texto tenha pelo menos 1 caracter, e caso o parâmetro não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".

const type = (param) => {
  if (typeof param === "number") {
    return `O paramêntro ${param} é do tipo Number!`
  }
  return 'bugou'
}

console.log(type('5'));

// ---------------------------------------------------------------------------------------
// Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem: "Boas vindas, USERNAME!". Valide que o tipo de dado seja string e o texto tenha pelo menos caracter, e caso o parâmetro não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".

const verificaNome = (name) => {
  if (typeof name === "string" && name.length > 0) {
    return `Boas vindas, ${name}!`
  }
  return 'Parametro inválido'
}

console.log(verificaNome('Gus'));