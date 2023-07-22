let expect = chai.expect;

let controlDeck = new Deck();
let controlDeck2 = new Deck();
let cardDeck = controlDeck.cardDeck.slice();

controlDeck.shuffleDeck();
let shuffle = controlDeck.cardDeck;

describe('createDeck()', () => {
    describe('test the deck', () => {
        it('Should return an array of 52 cards', () => {
        expect(cardDeck).to.have.lengthOf(52);
});

        it('Should return an array that is not in the same order as the original', () => {
        expect(controlDeck.cardDeck).to.not.equal(controlDeck2.cardDeck);
});

    });
});

