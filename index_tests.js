const assert = chai.assert;

describe('MyFunctions', function() {
    describe('#shuffle', fucntion() {
        it('Should return an array of 52 cards', function() {
        const deck = new Deck;
        let shuffle = deck.shuffle();
        assert.equal(shuffle.length, 52);
});

it('Should return an array that is not in the same order as the original', function() {
    const controlDeck = new Deck;
    const shuffleDeck = new Deck;
    shuffle = shuffleDeck.shuffle();
    assert.notEqual(shuffle, controlDeck.deck);
});

    });
});