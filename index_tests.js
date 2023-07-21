let expect = chai.expect;


describe('MyFunctions', () => {
    describe('#shuffle', () => {
        it('Should return an array of 52 cards', () => {
        var deck = new deck;
        let shuffle = deck.shuffle();
        expect.equal(shuffle.length, 52);
});

it('Should return an array that is not in the same order as the original', () => {
    var controlDeck = new Deck;
    var shuffleDeck = new Deck;
    shuffle = shuffleDeck.shuffle();
    expect.notequal(shuffle, controlDeck.deck);
});

    });
});

