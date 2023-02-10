const DECK_API_URL = 'https://deckofcardsapi.com/api/deck';

export function startNewGame() {
  return fetch(`${DECK_API_URL}/new/shuffle`)
    .then((response) => response.json());
}

export function drawCard(deckId) {
  return fetch(`${DECK_API_URL}/${deckId}/draw/`)
    .then((response) => response.json());
}

export function stopGame() {
  console.log('stop');
}