//const expect = chai.expect;
//const assert = chai.assert;
const chai = require('chai');

describe('MyFunctions', () => {
    describe('#shuffle', () => {
        it('Should return an array of 52 cards', () => {
        var deck = new Deck;
        let shuffle = deck.shuffle();
        expect.equal(shuffle.length, 52);
});

it('Should return an array that is not in the same order as the original', function() {
    var controlDeck = new Deck;
    var shuffleDeck = new Deck;
    shuffle = shuffleDeck.shuffle();
    expect.notEqual(shuffle, controlDeck.deck);
});

    });
});

