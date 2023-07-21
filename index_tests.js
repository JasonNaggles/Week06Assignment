const expect = chai.expect;


describe('createDeck', () => {
    describe('test deck', () => {
        it('Should return an array of 52 cards', () => {
        var deck = new Deck;
        expect(deck).to.have.lengthOf(52);
});

it('Should return an array that is not in the same order as the original', () => {
    var controlDeck = new Deck;
    var shuffleDeck = new Deck;
    let shuffle = shuffleDeck.shuffle();
    expect.notequal(shuffle, controlDeck.deck);
});

    });
});

