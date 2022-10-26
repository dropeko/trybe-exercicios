const cards = require('./game');

const player = () => {
  return cards[Math.floor(Math.random() * cards.length)];
}

// const player2 = () => {
//   return cards[Math.floor(Math.random() * cards.length)];
// }

const battle = (card1, card2, attribute) => {
  let winner;
  if(card1.atk > card2.def){
    winner = card1.name;
  } else if (card1.atk === card2.def) {
    winner = 'Empate';
  } else {
    winner = card2.name;
  }

  return `
Player 1:
Name: ${card1.name}
Atk: ${card1.atk}
Def: ${card1.def}
-----------------
Player 2:
Name: ${card2.name}
Atk: ${card2.atk}
Def: ${card2.def}
-----------------
${winner != 'Empate' ? `${winner} is winner` : 'Deu empate'}!
Best ${attribute} is ${bestSkill(card1, card2, attribute) != 'Empate' ? bestSkill(card1, card2, attribute) : 'no one won, there was a tie.'}
`;
}

const bestSkill = (card1, card2, attribute) => {
  let bestScore;
  if(card1[attribute] > card2[attribute]){
    bestScore = card1.name;
  } else if (card1[attribute] === card2[attribute]){
    bestScore = 'Empate';
  } else {
    bestScore = card2.name;
  }
  return bestScore;
}

console.log(battle(player(), player(), 'def'));
// console.log(bestSkill(player(), player(), 'atk'));