class Deck {
    constructor() {
        this.cardDeck = [];

        this.suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

        let n = 0;
        for (let i = 0; i < this.suits.length; i++) {
        let char = '';
        for (let x = 2; x <= 14; x++) {
            switch (x) {
                case 11:
                    char = 'Jack'
                    break;
                case 12:
                    char = 'Queen'
                    break;
                case 13:
                    char = 'King'
                    break;
                case 14:
                    char = 'Ace'
                    break;
                    default:
                    char = x;
            }
            this.card = {
                cardIndex: ++n,
                suit: this.suits[i],
                value: x,
                character: char
            }
            this.cardDeck.push(this.card);
        }
    }
}



shuffleDeck() {
    for (let i = this.cardDeck.length; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let currentIndex = this.cardDeck[i];
        this.cardDeck[i] = this.cardDeck[randomIndex];
        this.cardDeck[randomIndex] = currentIndex;
    }
    return this.deck;
}

}
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
let deck = new Deck;
deck.shuffleDeck();

let players = new Players;
players.playGame();

players.displayWinner();




