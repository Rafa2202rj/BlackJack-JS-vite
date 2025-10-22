import { valueCard } from "./value-card";

//Turn 0 = 1st player and last is CPU
export const scoreGame = ( card, turn, scorePlayers, scoreHTML ) => {
    scorePlayers[turn] = scorePlayers[turn] + valueCard(card);
    scoreHTML[turn].innerText = scorePlayers[turn];
    return scorePlayers[turn];
}