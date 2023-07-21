

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


async playCards(playerOne, playerTwo) {
    // Getters
    const playerOneScoreUl = document.querySelector('player-one-score');
    const playerTwoScoreUl = document.querySelector('player-two-score');
    const compareScoresUl = document.querySelector('score-list');
    let playerOneTotalScore = document.querySelector('#player-one-total-score');
    let playerTwoTotalScore = document.querySelector('#player-two-total-score');
    let winner = document.querySelector('#winner');

    // loop over each hand to determine score
    for (let i = 0; i < this.players[0].hand.length; i++) {
        let playerOneCard = playerOne.hand[i];
        let playerTwoCard = playerTwo.hand[i];

        this.printCardPlayerOne(playerOneScoreUl, playerOneCard);
        this.printCardPlayerTwo(playerTwoScoreUl, playerTwoCard);

        if (playerOneCard.value > playerTwoCard.value) {
            this.printScore(` ${playerOne.name} wins!`, compareScoresUl);
            playerOne.score++;
        } else if (playerOneCard.value < playerTwoCard.value) {
            this.printScore(` ${playerTwo.name} wins!`, compareScoresUl);
            playerTwo.score++;
        } else if (playerOneCard.value === playerTwoCard.value) {
            this.printScore(`It's a draw! No points awarded.`, compareScoresUl);
        }

        playerOneTotalScore.innerHTML = `Score: ${playerOne.score}`;
        playerTwoTotalScore.innerHTML = `Score: ${playerTwo.score}`;
        await this.timer(600);
        }

        // Checks the winner
        if (playerOne.score > playerTwo.score) {
            winner.innerHTML = `${playerOne.name} Wins!!!`;
        } else if (playerOne.score < playerTwo.score) {
            winner.innerHTML = `${playerTwo.score} Wins!!!`;
        } else if (playerOne.score === playerTwo.score) {
            winner.innerHTML = `It's a Draw!!! Nobody wins in war.`;
        }

        //Changes start button to reload button which will make it so you can play again
        document.querySelector(`#startbutton`).setAttribute(`onclick`, `location.load();`);
        document.querySelector(`#startbutton`).disabled = false;
        document.querySelector(`#startbutton`).innerHTML = `Play Again?`; 
    }

    // Change Player One's DOM
    printCardPlayerOne(playerOneScoreUl, card) {
        let playerOneScoreLi = document.createElement(`li`);
        playerOneScoreLi.appendChild(document.createTextNode(card.rank + ' of ' + card.suit));
        playerOneScoreUl.appendChild(playerOneScoreLi);
    }

    // Change Player Two's DOM
    printCardPlayerTwo(playerTwoScoreUl, card) {
        let playerTwoScoreLi = document.createElement(`li`);
        playerTwoScoreLi.appendChild(document.createTextNode(card.rank + ' of ' + card.suit));
        playerTwoScoreUl.appendChild(playerTwoScoreLi);
    }

    // Changes Score Column DOM
    printScore(winner, compareScoresUl) {
        let compareScoresLi = document.createElement(`li`);
        compareScoresLi.appendChild(document.createTextNode(winner));
        compareScoresUl.appendChild(compareScoresLi);
    }

    // Helper async function to control flow
    timer = ms => new Promise(res => setTimeout(res, ms));
}


let war = new Game;
war.start()




