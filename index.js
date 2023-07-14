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
    }
}