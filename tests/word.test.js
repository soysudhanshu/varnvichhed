const { viched } = require("../src/varnviched");

const {MATRAHIN_SHABD} = require('./data/मात्राहीन-शब्द.js');
const { MATRAO_WALE_SHABD } = require("./data/मात्रायुक्त-शब्द.js");

test('Vichhed words without matra', () => {
    MATRAHIN_SHABD.forEach(shabd => {
        expect(viched(shabd.sabdh)).toStrictEqual(shabd.vichhed)
    });
});

test('Vichhed words with matra', ()=> {
    MATRAO_WALE_SHABD.forEach(shabd => {
        expect(viched(shabd.shabd)).toStrictEqual(shabd.vichhed);
    })
});