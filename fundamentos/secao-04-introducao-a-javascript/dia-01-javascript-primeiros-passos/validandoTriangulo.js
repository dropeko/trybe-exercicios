const lado1 = 30;
const lado2 = 30;
const lado3 = 30;
const somaLados = lado1 + lado2 + lado3

if (lado1 || lado2 || lado3 < 0){
    console.log('Angulo INVÁLIDO!!')
    
}

if (somaLados < 180){
    console.log(true)
}
else if(somaLados > 180){
    console.log(false)
}
else if (somaLados < 0){
    console.log()
}