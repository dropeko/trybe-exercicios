/*2. Taxa Metabólica Basal
Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site, vamos ajudá-la escrevendo um algoritmo.
Ele recebe os seguintes dados:
age: número maior que 0
sex: M ou F
weight: Em (kg) com número maior que 0
height: Em (cm) com número maior que 0
A fórmula para homens:
(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
A fórmula para mulheres:
(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
Imprima no terminal o resultado do cálculo no formato:
"A taxa metabólica basal é: x Kcal"*/

let age = 27;
let sex = 'M';
let weight = 77.8;
let height = 175;
let tmb;

if (sex === 'M'){
   tmb = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5
}
else if (sex === 'F'){
   tmb = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161
}
else {
    console.log('VALOR DECLARADO INVÁLIDO!!!!')
}


console.log(`A taxa metabólica basal calculada foi: ${tmb}`) 
//console.log('A taxa metabólica basal calculada foi: '+ tmb)