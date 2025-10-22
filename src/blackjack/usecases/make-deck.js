import _ from 'underscore';

/**
 * This function creates a random deck 
 * @param {Array<String>} types Ex. ['C', 'D', 'H', 'S' ]
 * @param {Array<String>} specials Ex. ['A', 'J', 'Q', 'K' ]
 * @returns {Array<String>}
*/
export const makeDeck = (types, specials) => {

    if (!types || types.length === 0) 
        throw new Error("types of card is mandatory");

    if (!specials || specials.length === 0) 
        throw new Error("specials of card is mandatory");

    let deck = [];
    for ( let i = 2; i<=10; i++ ) {
        for ( let type of types ) {
            deck.push (i + type);
        }
    }

    for ( let type of types ) {
        for ( let special of specials ) {
            deck.push (special + type);
        }
    }
    
    return _.shuffle(deck);
}

// export default makeDeck;