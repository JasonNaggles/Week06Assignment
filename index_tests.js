const expect = chai.expect;





describe('MyFunctions', function() {
    describe('#shuffle', function() {
        it('Should return an array of 52 cards', function() {
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

