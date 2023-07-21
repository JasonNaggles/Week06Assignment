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
playGame() {
    while(deck.cardDeck.length > 0);
    let one = deck.cardDeck.pop();
    let two = deck.cardDeck.pop();
    players.compareCards(one, two);
}
determineWinner() {
    if (this.playerOneTotalPoints > this.playerTwoTotalPoints) {
        return "Player 1";
    } else if (this.playerOneTotalPoints < this.playerTwoTotalPoints) {
        return "Player 2";
    } else {
        return "It's a tie";
    }
}
displayWinner() {
    alert(`
    The winner is: ${this.determinenWinner}!
        - Player 1 had ${this.playerOneTotalPoints} and
        - Player 2 had ${this.playerOneTotalPoints}
    * There were ${this.ties} ties`);
}






}
    

let war = new Game;
war.start()




