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

        const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    


    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            this.deck.push(new Card(ranks[j], j = 2, suits[i]));
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
}
