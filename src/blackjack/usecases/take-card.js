/** 
 * This function takes a card from the deck
 * @param {Array<String>} deck 
 * @returns {String} returns and eliminates a card from deck
 */

export const takeCard = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'There are no cards in the deck';
    }

    return deck.pop();
}