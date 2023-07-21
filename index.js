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

        let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
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
        let name = prompt(`Enter name of player ${player}.`, `Player ${player}`);

        while (name == '' || name === null) {
            name = prompt(`Who is playing? ${player}.`);
        }
        this.players.push(new Player(name));

        let playerDiv = document.querySelector('#' + player);
        playerDiv.textContent = name;
    }

start() {
    document.querySelector('#startbutton').disabled = true;
    console.log("using start function")
    this.createPlayer('one');
    this.createPlayer('two');

    const gameDeck = new Deck;
    gameDeck.shuffle();
    gameDeck.deal(this.players[0], this.players[1]);

   this.playCards(this.players[0], this.players[1]);
}


}


let war = new Game;
war.start()




