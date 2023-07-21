class Players {
    constructor(points) {
        this.playerOneTotalPoints = 0;
        this.playerTwoTotalPoints = 0;
        this.ties = 0;
    }
    compareCards(valuePlayerOne, valuePlayerTwo) {
        if (valuePlayerOne.value === valuePlayerTwo.value) {
            players.addPoints('nobobyWon')
            return 'nobodyWon'
        } else if (valuePlayerOne.value > valuePlayerTwo.value) {
            players.addPoints('playerOne')
            return 'playerOne'
        } else {
            players.addPoints('playerTwo')
            return 'playerTwo'
        }
    }
    addPoints(player) {
        if (player == 'nobodyWon') {
            this.ties++;
        } else if (player == 'playerOne') {
            this.playerOneTotalPoints++;
        } else {
            this.playerTwoTotalPoints++;
        }
    }

}
class Card {
    constructor(rank, value, suit) {
        this.rank = rank;
        this.value = value;
        this.suit = suit;
    }
}
class Deck {
    constructor() {
        this.deck = [];

        this.suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        
    for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.ranks.length; j++) {
            this.deck.push(new Card(ranks[j], j + 2, suits[i]));
     }
    }

}


shuffle() {
    for (let i = this.suits.length; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let currentIndex = this.deck[i];
        this.deck[i] = this.deck[randomIndex];
        this.deck[randomIndex] = currentIndex;
    }
    return this.deck;
}

}

class Game {
    constructor() {
        this.players = [];
    }

    createPlayer(player) {
        //let name = prompt(`Enter name of player ${player}.`, `Player ${player}`);

        //while (name == '' || name === null) {
            //name = prompt(`Who is playing? ${player}.`);
        //}
        //this.players.push(new Player(name));

        //let playerDiv = document.querySelector('#' + player);
        //playerDiv.textContent = name;
    }

start() {
    this.createPlayer('one');
    this.createPlayer('two');

    let gameDeck = new deck;
    gameDeck.shuffle();
    gameDeck.deal(this.players[0], this.players[1]);

   this.playCards(this.players[0], this.players[1]);
}




}

let deck = new createDeck;

function stringLength(string) {
    return stringLength;
}
    

let war = new Game;
war.start()




