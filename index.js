class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
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
    for (let i = 0; i < suits.length; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let currentIndex = this.deck[i];
        this.deck[i] = this.deck[randomIndex];
        this.deck[randomIndex] = currentIndex;
    }
    return this.deck;
}
deal(firstPlayer, secondPlayer) {
    firstPlayer.hand = [...this.deck.slice(0, 26)];
    secondPlayer.hand = [...this.deck.slice(26, 52)];
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




