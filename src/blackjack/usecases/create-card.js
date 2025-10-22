
/**
 * Creates a card in the HTML
 * @param {String} card 
 * @param {*} turn 
 */ 
export const createCard = ( card, turn, divCardsPlayers ) => {
    if (!card || !divCardsPlayers ) throw new Error("The card and turn are mandatory");
    
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('cards');
    divCardsPlayers[turn].append( imgCard );
}