import _ from 'underscore';
import { makeDeck, takeCard, createCard, scoreGame, computerGame } from "./usecases/index";

const miFunction = (() => {
    'use strict'

    let deck       = [];
    const types    = ['C', 'D', 'H', 'S' ],
          specials = ['A', 'J', 'Q', 'K' ];

    let scorePlayers = []; 
    
    //References DOM
    const btnAsk = document.querySelector('#btnAsk'),
          btnStop = document.querySelector('#btnStop'),
          btnNew = document.querySelector('#btnNew');
    
    const scoreHTML = document.querySelectorAll('small'),
          divCardsPlayers = document.querySelectorAll('.divCards')
    
    //Starts the game
    const startGame = ( numPlayers = 2 ) => {
        deck = makeDeck(types, specials);
        scorePlayers = [];

        for ( let i = 0; i<numPlayers; i++) {
            scorePlayers.push(0);
        }
        
        scoreHTML.forEach( elem => elem.innerText = 0);
        divCardsPlayers.forEach ( elem => elem.innerHTML = '');
 
        btnAsk.disabled = false;
        btnStop.disabled = false;
    }
    
    //Events
    btnAsk.addEventListener('click', () => {
        
        const card = takeCard(deck);
        const scorePlayer = scoreGame (card, 0, scorePlayers, scoreHTML);
        createCard (card, 0, divCardsPlayers);
    
        if (scorePlayer > 21 ){
            console.warn('Lost');
            btnAsk.disabled = true;
            btnStop.disabled = true;
            computerGame(scorePlayer, deck, scorePlayers, scoreHTML, divCardsPlayers);
        } else if (scorePlayer === 21){
            console.warn('21 genial')
            btnAsk.disabled = true;
            btnStop.disabled = true;
            computerGame(scorePlayer, deck, scorePlayers, scoreHTML, divCardsPlayers);
        }
    })
    
    btnStop.addEventListener('click', () => {
        btnAsk.disabled = true;
        btnStop.disabled = true;
        computerGame(scorePlayers[0], deck, scorePlayers, scoreHTML, divCardsPlayers);
    })
    
    btnNew.addEventListener('click', () => {
        startGame();
    })

    return {
        newGame: startGame
    }

})();