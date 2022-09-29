 /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
 */
// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function mudaP(paragraph){
    document.getElementsByTagName(paragraph)[1].innerHTML = 'Daqui a 2 anos estarei no mercado dev contribuindo para a tecnologia e estudando para continuar me aperfeiçoando.';
}
mudaP('p');

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColor(element, color) {
    document.getElementById(element).style.backgroundColor = color;
  }
changeColor('mainC', 'rgb(76,164,109)');

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function corQuad(element, color){
    document.getElementById(element).style.backgroundColor = color;
}
corQuad('centerC', 'white');

// 4. Crie e execute uma função que corrija o texto da tag <h1>.
function corrigeTxt(element){
    document.getElementById(element).innerText = 'Exercício - JavaScript + HTML + CSS'
}

corrigeTxt('titulo');

//

