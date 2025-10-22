import { takeCard, scoreGame, createCard, determineWinner } from "./index";

/**
 * Game of the CPU
 * @param {Number} minScore 
 * @param {Array<String>} deck 
 */
export const computerGame = ( minScore, deck, scorePlayers, scoreHTML, divCardsPlayers ) => {

    if (!minScore) throw new Error("minScore is necessary");    

    let scoreCPU = 0;

    do {
        const card = takeCard(deck);
        scoreCPU = scoreGame( card, scorePlayers.length-1, scorePlayers, scoreHTML );
        createCard(card, scorePlayers.length-1, divCardsPlayers );
    } while ( (scoreCPU < minScore) && (minScore <= 21) );

    determineWinner(scorePlayers);
}