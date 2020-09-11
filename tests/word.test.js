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
});

test('Anuswar tests', () => {
    expect(viched('खंड')).toStrictEqual(['ख्', 'अ', 'ण्', 'ड्', 'अ']);
    expect(viched('अंगूर')).toStrictEqual(['अ', 'ङ्', 'ग्', 'ऊ', 'र्', 'अ']);
    expect(viched('कंबल')).toStrictEqual(['क्', 'अ', 'म्', 'ब्', 'अ', 'ल्', 'अ']);
    expect(viched('चंद्र')).toStrictEqual(['च्', 'अ', 'न्', 'द्', 'र्', 'अ']);
    expect(viched('आक्रांत')).toStrictEqual(['आ', 'क्', 'र्', 'आ', 'न्', 'त्', 'अ']);
    expect(viched('अंग्रेज़')).toStrictEqual(['अ', 'ङ्', 'ग्', 'र्', 'ए', 'ज़्', 'अ']);
    expect(viched('घंटी')).toStrictEqual(['घ्', 'अ', 'ण्', 'ट्', 'ई']);
    expect(viched('तांत्रिक')).toStrictEqual(['त्', 'आ', 'न्', 'त्', 'र्', 'इ', 'क्', 'अ']);
    expect(viched('श्रृंगार')).toStrictEqual(['श्', 'र्', 'ऋ', 'ङ्', 'ग्', 'आ', 'र्', 'अ']);
    expect(viched('संभ्रांत')).toStrictEqual(['स्', 'अ', 'म्', 'भ्', 'र्', 'आ', 'न्', 'त्', 'अ']);
    expect(viched('अधिकांश')).toStrictEqual(['अ', 'ध्', 'इ', 'क्', 'आं', 'श्', 'अ']);
    expect(viched('काठमांडू')).toStrictEqual(['क्', 'आ', 'ठ्', 'अ', 'म्', 'आ', 'ण्', 'ड्', 'ऊ']);
    expect(viched('रूपांतरित')).toStrictEqual(['र्', 'ऊ', 'प्', 'आ', 'न्', 'त्', 'अ', 'र्', 'इ', 'त्', 'अ']);
    expect(viched('असंख्य')).toStrictEqual(['अ', 'स्', 'अ', 'ङ्', 'ख्', 'य्', 'अ']);
    expect(viched('वाद्ययंत्र')).toStrictEqual(['व्', 'आ', 'द्', 'य्', 'अ', 'य्', 'अ', 'न्', 'त्', 'र्', 'अ']);
    expect(viched('सौंदर्य')).toStrictEqual(['स्', 'औं', 'द्', 'अ', 'र्', 'य्', 'अ']);
    expect(viched('प्रपंच')).toStrictEqual(['प्', 'र्', 'अ', 'प्', 'अ', 'ञ्', 'च्', 'अ']);
    expect(viched('संक्षिप्त')).toStrictEqual(['स्', 'अ', 'ङ्', 'क्', 'ष्', 'इ', 'प्', 'त्', 'अ']);
    expect(viched('मंत्रमुग्ध')).toStrictEqual(['म्', 'अ', 'न्', 'त्', 'र्', 'अ', 'म्', 'उ', 'ग्', 'ध्', 'अ']);
    expect(viched('स्वतंत्रता')).toStrictEqual(['स्', 'व्', 'अ', 'त्', 'अ', 'न्', 'त्', 'र्', 'अ', 'त्', 'आ']);
    expect(viched('संपादक')).toStrictEqual(['स्', 'अ', 'म्', 'प्', 'आ', 'द्', 'अ', 'क्', 'अ']);
    expect(viched('संदिग्ध')).toStrictEqual(['स्', 'अ', 'न्', 'द्', 'इ', 'ग्', 'ध्', 'अ']);
    expect(viched('हत्याकांड')).toStrictEqual(['ह्', 'अ', 'त्', 'य्', 'आ', 'क्', 'आ', 'ण्', 'ड्', 'अ']);
    expect(viched('पढ़ें')).toStrictEqual(['प्', 'अ', 'ढ़्', 'एँ']);
    expect(viched('में')).toStrictEqual(['म्', 'एँ'])
})

test('Anuswar Exceptions', () => {
    expect(viched('हिंदुस्तान')).toStrictEqual(['ह्', 'इ', 'न्', 'द्', 'उ', 'स्', 'त्', 'आ', 'न्', 'अ']);
    expect(viched('हिंद')).toStrictEqual(['ह्', 'इ', 'न्', 'द्', 'अ']);
    expect(viched('बिंदु')).toStrictEqual(['ब्', 'इ', 'न्', 'द्', 'उ']);
    expect(viched('लिंग')).toStrictEqual(['ल्', 'इ', 'ङ्', 'ग्', 'अ']);
    expect(viched('एवं')).toStrictEqual(['ए', 'व्', 'अ', 'म्']);
});