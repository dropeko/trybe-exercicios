// 1 - Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body
// Capturo o elemento PAI
let body = document.getElementById('body-content');
// Crio o elemento filho e atribuo valor a ele
let newTagH1 = document.createElement('h1');
// Adiciona valor ao elemento criado
newTagH1.innerHTML = 'Exercício - JavaScript DOM';
// Adiciona ao elemento PAI
body.appendChild(newTagH1);

// 2 - Adicione a tag main com a classe main-content como filho da tag body
let newTagMain = document.createElement('main');
newTagMain.className = 'main-content';
body.appendChild(newTagMain);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2
let mainContent = document.getElementsByClassName('main-content')[0];
let newTagSection = document.createElement('section');
newTagSection.className = 'center-content';
mainContent.appendChild(newTagSection);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto
let sectionContent = document.getElementsByClassName('center-content')[0];
let newPSection = document.createElement('p');
newPSection.innerHTML = 'Você pode encontrar as coisas que perdeu, mas nunca as que abandonou!'
sectionContent.appendChild(newPSection);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
mainContent.appendChild(sectionLeft);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2
let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
mainContent.appendChild(sectionRight);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5
let leftContent = document.getElementsByClassName('left-content')[0];
let newImg = document.createElement('img');
newImg.src = 'https://picsum.photos/200';
leftContent.appendChild(newImg);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6
let rightContent = document.getElementsByClassName('right-content')[0];
let unorderedList = document.createElement('ul');
rightContent.appendChild(unorderedList);

let ulContent = document.getElementsByTagName('ul')[0];
for (let index = 1; index <= 10; index += 1){
    let newNum = document.createElement('li');
    newNum.innerHTML = index;
    ulContent.appendChild(newNum);
}

// 9 - Adicione 3 tags h3, todas sendo filhas do main criado no passo 2
for (let index = 0; index < 3; index += 1){
    let newH3 = document.createElement('h3');
    mainContent.appendChild(newH3)
};