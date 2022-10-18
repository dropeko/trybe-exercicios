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

// ---------------------------------------------------------------------------------------
// Escreva uma função que calcule a velocidade final de um objeto em queda livre dado o tempo que levou para atingir o solo. A fórmula para o cálculo é velocidade = tempo * gravidade. Considere a gravidade constante de 9.8.

const calcGrav = (num) => num * 9.8 

console.log(calcGrav(10));

// ---------------------------------------------------------------------------------------
// Utilizando operadores ternários e arrow functions reescreva a seguinte função:
// function isZero(number) {
// 	if (number === 0) {
// 		return "Zero";
// 	}
// 	return "Not zero";
// }

const isZero = (number) => number === 0 ? 'Zero' : 'Not Zero'

console.log(isZero(5));

// ---------------------------------------------------------------------------------------
// Escreva uma função que, dado um array, verifique se todos os valores são iguais. Valide que o tipo de entrada seja array e que o tamanho seja maior que 1, e caso a entrada não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".

const novoArray = [8, 8, 8, 8, 8]

const verificaArray = (sameArray) => {
  for (let index = 0; index < sameArray.length; index += 1){
    for (let index2 = 1; index2 < sameArray.length; index2 += 1){
      if (sameArray[index] === sameArray[index2]){
        sameArray[index] = sameArray[index2];
        let result = true;
      }
    }
  }
  return result
}
