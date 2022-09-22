// as saídas para a pessoa usuária.
//1. Descubra a idade mínima
//Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.
//Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:
//"x é a pessoa mais jovem e possui y anos de idade" 

const Marina = 127;
const Silvia = 35;
const Iza = 47;
let resp; //undefined ou nulo 

if (Marina < Silvia && Marina < Iza){
    console.log('Marina é a pessoa mais jovem e possui 27 anos de idade')
}
else if (Silvia < Marina && Silvia < Iza){
    console.log('Silvia é a pessoa mais jovem e possui 35 anos de idade')
}
else{
    console.log('Iza é a pessoa mais jovem e possui 17 anos de idade')
}