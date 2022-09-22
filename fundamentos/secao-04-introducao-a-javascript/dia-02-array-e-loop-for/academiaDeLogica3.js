/*. Lanchonete da Trybe
A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.

Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo e imprima no terminal a mensagem de acordo com a opção escolhida.

Tabela:
"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"
Caso a pessoa escolha uma opção inexistente, imprima no terminal:

"Ainda não possuímos esta opção :(" */

let escolha = 1;

if (escolha === 1){
    console.log('1 - Trybe Lanche Feliz');

}
else if (escolha === 2){
    console.log('2 - McTrybe');

}
else if (escolha === 3){
    console.log('3 - TrybeWooper');

}
else if (escolha === 4){
    console.log('4 - X-Trybe');

}
else if (escolha === 5){
    console.log('5 - Triplo Trybe com JS');

}
else{
    console.log('Ainda não possuímos esta opção :(');
}
