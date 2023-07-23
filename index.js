class Deck { //create initial deck
    constructor() {
        this.cardDeck = [];

        this.suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

        let k = 0;
        for (let i = 0; i < this.suits.length; i++) { //loops through the suits array 
        let char = '';
        for (let j = 2; j <= 14; j++) { //loops through the values array
            switch (j) {
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
                    char = j;
            }
            this.card = { //create a card object to push onto the deck array
                cardIndex: ++k,
                suit: this.suits[i],
                value: j,
                character: char
            }
            this.cardDeck.push(this.card);
        }
    }
}



shuffleDeck() {
    for (let i = this.cardDeck.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let hold = this.cardDeck[i] //save original value for swap
        this.cardDeck[i] = this.cardDeck[randomIndex] //make the current value of i = the randomIndex
        this.cardDeck[randomIndex] = hold //make value of the randomIndex = to the original value
    }
    
}

}
class Players {
    constructor(points) {
        this.playerOneTotalPoints = 0;
        this.playerTwoTotalPoints = 0;
        this.ties = 0;
    }
    compareCards(valuePlayerOne, valuePlayerTwo) { //compare cards to find the winner
        if (valuePlayerOne.value === valuePlayerTwo.value) { // keeps a tally if there are no winners
            this.addPoints('nobobyWon')
            console.log('nobodyWon');
        } else if (valuePlayerOne.value > valuePlayerTwo.value) { // compare cards and update player one's points
            this.addPoints('playerOne')
            console.log('playerOne');
        } else {  // update player two by one point if they won
            this.addPoints('playerTwo')
            console.log('playerTwo');
        }
    }
    addPoints(player) { // add points to the winner
        if (player == 'nobodyWon') {
            this.ties++;
            console.log('nobodyWon');
        } else if (player == 'playerOne') {
            this.playerOneTotalPoints++;
            console.log('playerOne');
        } else {
            this.playerTwoTotalPoints++;
            console.log('playerTwo');
        }
    }


playGame(deck) { //play the game
    while(deck.cardDeck.length > 0) {
        let cardPlayerOne = deck.cardDeck.pop(); //draw a card for player one
        let cardPlayerTwo = deck.cardDeck.pop(); //draw a card for player two
        this.compareCards(cardPlayerOne, cardPlayerTwo); // execute cardPlayer compare method
    }
        

    if (this.playerOneTotalPoints === this.playerTwoTotalPoints) {  //
        console.log("It's a tie!");
    } else {
        this.displayWinner();
}
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
displayWinner() { // execute players determine winner method and display winner and total points for each player
    console.log(`
    The winner is: ${this.determineWinner()}!
        - Player 1 had ${this.playerOneTotalPoints} and
        - Player 2 had ${this.playerOneTotalPoints}
    * There were ${this.ties} ties`)
}

}   
let deck = new Deck(); //create new instance of Deck
deck.shuffleDeck();

let players = new Players(); //create new instance of Players
players.playGame(deck); //play gamne

players.displayWinner(); //displays the winner




