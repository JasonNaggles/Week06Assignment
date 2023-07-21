let expect = chai.expect;


describe('createDeck()', () => {
    describe('test the deck', () => {
        it('Should return an array of 52 cards', () => {
        expect(cardDeck).to.have.lengthOf(52);
});

it('Should return an array that is not in the same order as the original', () => {
    expect.notequal(shuffle, controlDeck.deck);
});

    });
});

