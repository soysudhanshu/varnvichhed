const { viched } = require("../src/varnviched");

const { MATRAHIN_SHABD } = require('./data/मात्राहीन-शब्द.js');
const { MATRAO_WALE_SHABD } = require("./data/मात्रायुक्त-शब्द.js");

test('Vichhed words without matra', () => {
    MATRAHIN_SHABD.forEach(shabd => {
        expect(viched(shabd.sabdh)).toStrictEqual(shabd.vichhed)
    });
});

test('Vichhed words with matra', () => {
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
        'दफ़्तर': ['द्', 'अ', 'फ़्', 'त्', 'अ', 'र्', 'अ'],
        'दृढ़ता': ['द्', 'ऋ', 'ढ़्', 'अ', 'त्', 'आ'],
    }

    for (const word in words) {
        const vichhed = words[word];
        expect(viched(word)).toStrictEqual(vichhed);
    }
});

test('अनुनासिक', () => {
    const words = {
        'अँ': ['अँ'],
        'आँ': ['आँ'],
        'उँ': ['उँ'],
        'ऊँ': ['ऊँ'],
        'ऋँ': ['ऋँ'],
        'इँ': ['इँ'],
        'एँ': ['एँ'],
        'माँ': ['म्', 'आँ'],
        'चाँदनी': ['च्', 'आँ', 'द्', 'अ', 'न्', 'ई'],
        'गाँठ': ['ग्', 'आँ', 'ठ्', 'अ'],
        'बाँस': ['ब्', 'आँ', 'स्', 'अ'],
        'श्रेणियाँ': ['श्', 'र्', 'ए', 'ण्', 'इ', 'य्', 'आँ'],
        'धुआँ': ['ध्', 'उ', 'आँ'],
        'मात्राएँ': ['म्', 'आ', 'त्', 'र्', 'आ', 'एँ'],
        'बँद': ['ब्', 'अँ', 'द्', 'अ'],
        'महँगाई': ['म्', 'अ', 'ह्', 'अँ', 'ग्', 'आ', 'ई'],
        'अँगना': ['अँ', 'ग्', 'अ', 'न्', 'आ'],
        'स्वाँग': ['स्', 'व्', 'आँ', 'ग्', 'अ'],
        'कृँष्णा': ['क्', 'ऋँ', 'ष्', 'ण्', 'आ'],
        'छाँटिए': ['छ्', 'आँ', 'ट्', 'इ', 'ए']
    };

    for (const word in words) {
        const vichhed = words[word];
        expect(viched(word)).toStrictEqual(vichhed);
    }
});

test('अर्धचंद्रकार युक्त शब्द', () => {
    const shabds = {
        'ऑ': ['ऑ'],
        'ऍ': ['ऍ'],
        'ॲ': ['ॲ'],
        'हॉट': ['ह्', 'ऑ', 'ट्', 'अ'],
        'बॅक': ['ब्', 'ऍ', 'क्', 'अ'],
        'डॉक्टर': ['ड्', 'ऑ', 'क्', 'ट्', 'अ', 'र्', 'अ']
    };

    for (const shabd in shabds) {
        const vichhed = shabds[shabd];
        expect(viched(shabd)).toStrictEqual(vichhed);
    }
});

test('विसर्ग युक्त शब्द', () => {
    expect(viched('अः')).toStrictEqual(['अः']);
    expect(viched('आः')).toStrictEqual(['आः']);
    expect(viched('इः')).toStrictEqual(['इः']);
    expect(viched('ईः')).toStrictEqual(['ईः']);
    expect(viched('उः')).toStrictEqual(['उः']);
    expect(viched('ऊः')).toStrictEqual(['ऊः']);

    expect(viched('भोः')).toStrictEqual(['भ्', 'ओः']);
    expect(viched('केशवः')).toStrictEqual(['क्', 'ए', 'श्', 'अ', 'व्', 'अः']);
    expect(viched('बालाः')).toStrictEqual(['ब्', 'आ', 'ल्', 'आः']);
    expect(viched('मतिः')).toStrictEqual(['म्', 'अ', 'त्', 'इः']);
    expect(viched('चक्षुः')).toStrictEqual(['च्', 'अ', 'क्', 'ष्', 'उः']);
    expect(viched('देवैः')).toStrictEqual(['द्', 'ए', 'व्', 'ऐः']);
    expect(viched('भूमेः')).toStrictEqual(['भ्', 'ऊ', 'म्', 'एः']);
    expect(viched('दुःख')).toStrictEqual(['द्', 'उः', 'ख्', 'अ']);
    expect(viched('सःअस्ति')).toStrictEqual(['स्', 'अः', 'अ', 'स्', 'त्', 'इ']);
    expect(viched('पुत्रःगतः')).toStrictEqual(['प्', 'उ', 'त्', 'र्', 'अः', 'ग्', 'अ', 'त्', 'अः'])
})