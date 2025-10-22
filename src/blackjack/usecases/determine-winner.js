/**
 * This function determines who wins
 * @param {Array<Number>} scorePlayers 
 */
export const determineWinner = (scorePlayers) => {
    const [ minScore, scoreCPU ] = scorePlayers;

    setTimeout( () => {        
        if( scoreCPU === minScore) {
            alert('Tie')
        } else if ( minScore > 21 ) { 
            alert('CPU wins')
        } else if (scoreCPU > 21 ) {
            alert('Player wins')
        } else {
            alert('CPU wins')
        }
    }, 100);
}