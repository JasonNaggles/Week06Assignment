let expect = chai.expect;
let assert = chai.assert;

describe('MyFunctions', () => {
    describe('#shuffle', () => {
        it('Should return an array of 52 cards', () => {
        var deck = new Deck;
        let shuffle = deck.shuffle();
        expect(shuffle.length, 52);
});

it('Should return an array that is not in the same order as the original', () => {
    var controlDeck = new Deck;
    var shuffleDeck = new Deck;
    shuffle = shuffleDeck.shuffle();
    expect(shuffle, controlDeck.deck);
});

    });
});

