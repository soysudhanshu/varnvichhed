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

test('Nukta words', () => {
    // Vichhed always returns a normalized character.
    const words = {
        'बड़ा': ['ब्', 'अ', 'ड़्', 'आ'],
        'बड़ा': ['ब्', 'अ', 'ड़्', 'आ'],
        'दाढ़ी': ['द्', 'आ', 'ढ़्', 'ई'],
        'टुकड़े': ['ट्', 'उ', 'क्', 'अ', 'ड़्', 'ए'],
        'रफ़्तार': ['र्', 'अ', 'फ़्', 'त्', 'आ', 'र्', 'अ'],
        'सड़क': ['स्', 'अ', 'ड़्', 'अ', 'क्', 'अ'],
        'इज़्ज़त': ['इ', 'ज़्', 'ज़्', 'अ', 'त्', 'अ'],
        'आरूढ़': ['आ', 'र्', 'ऊ', 'ढ़्', 'अ'],
        'ज़ख्मी': ['ज़्', 'अ', 'ख्', 'म्', 'ई'],
        'दफ़्तर': ['द्','अ','फ़्','त्','अ','र्','अ'],
        'दृढ़ता': ['द्', 'ऋ', 'ढ़्', 'अ', 'त्', 'आ'],
    }

    for (const word in words) {
        const vichhed = words[word];
        expect(viched(word)).toStrictEqual(vichhed);
    }
});