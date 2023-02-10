// // Common JS
// const meuArquivo = require("caminho do arquivo");

// module.exports = { };

// // ESModules
// import meuArquivo from 'caminho do arquivo';

// export default minhaVariavel;

import { drawCard, startNewGame, stopGame } from './helpers/fetchFunctions';
import { addCardToPlayer } from './helpers/addCard';

import './style.css';

const shuffleButton = document.querySelector('.shuffle');
const stopButton = document.querySelector('.stop');
const drawButton = document.querySelector('.draw');

let deckId;
const playersScore = {
  1: 0,
  2: 0,
};

shuffleButton.addEventListener('click', () => {
  startNewGame()
    .then((dados) => {
      deckId = dados.deck_id;
      stopButton.disabled = false;
      drawButton.disabled = false;
    });
});
drawButton.addEventListener('click', () => {
  drawCard(deckId)
    .then((data) => {
      const card = data.cards[0];
      addCardToPlayer(card, 1, playersScore);
    });
});
stopButton.addEventListener('click', stopGame);