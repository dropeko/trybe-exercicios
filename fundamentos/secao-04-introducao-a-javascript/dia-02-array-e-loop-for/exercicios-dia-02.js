// Lidando com Arrays
// Declarando array
let numbers = [5, 9, 3, 19, 770, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log()
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index])
}

// Some todos os valores contidos no array e imprima o resultado
let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index]
}
console.log('A soma dos valores foi de : ', soma)

// Calcule e imprima a média aritmética dos valores contidos no array

mediaAritmetica = soma / numbers.length
console.log('A média aritmética da array é: ', mediaAritmetica)

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”
if (mediaAritmetica > 20){
    console.log('Valor maior que 20')
}
else{
    console.log('Valor menor que 20')
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = 0;

for (let index = 0; index < numbers.length; index +=1){
    if (maiorValor < numbers[index]){
        maiorValor = numbers[index]
    }
}
console.log('O maior valor da array é: ', maiorValor)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”
let impares = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        impares += 1
    }
}
if (impares === 0){
    console.log('Nenhum valor impar encontrado!')
}
else{
    console.log('O número de valores impares na array é: ', impares)    
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o
let menorValor = 0;

