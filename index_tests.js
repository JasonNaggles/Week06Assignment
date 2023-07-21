let expect = chai.expect;


describe('create the Deck()', () => {
    describe('test the deck', () => {
        it('Should return an array of 52 cards', () => {
        expect(deck).to.have.lengthOf(52);
});

it('Should return an array that is not in the same order as the original', () => {
    expect.notequal(shuffle, controlDeck.deck);
});

    });
});

