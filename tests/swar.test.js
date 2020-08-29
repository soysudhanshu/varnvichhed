const { viched } = require('../src/varnviched.js');
const { SWARS, isMatra, matraToSwar, isSwar } = require('../src/swar.js');

SWARS.forEach(swar => {
    test(`Do no viched ${swar.varn}`, () => {
        expect(viched(swar.varn)).toStrictEqual([swar.varn]);
    });
});

test('Test isMatra()', function () {
    const matraye = [
        "ा", "ि", "ी", "ु",
        "ू", "े", "ै", "ो",
        "ौ", "ृ"
    ];

    matraye.forEach(matra => {
        expect(isMatra(matra)).toBeTruthy();
    });

    const notMatraye = [
        0, null, '', false, true,
        'a', 'ज्ञ', 'त्र', 'आ',
        'अ', 'ऐ', '1'
    ];

    notMatraye.forEach(matra => {
        expect(isMatra(matra)).toBeFalsy();
    });
});

test('Test matraToSwar()', () => {
    const matraSwarRishta = {
        'ा': "आ",
        'ि': "इ",
        'ी': "ई",
        'ु': "उ",
        'ू': "ऊ",
        'े': "ए",
        'ै': "ऐ",
        'ो': "ओ",
        'ौ': "औ",
        'ृ': 'ऋ'
    };

    for (const matra in matraSwarRishta) {
        expect(matraToSwar(matra))
            .toBe(matraSwarRishta[matra]);
    }

    const notMatraye = [
        0, null, '', false, true,
        'a', 'ज्ञ', 'त्र', 'आ',
        'अ', 'ऐ', '1'
    ];

    notMatraye.forEach(matra => {
        expect(matraToSwar(matra)).toBeNull();
    });
});

test('अर्धचंद्रकार विस्तार', () => {
    expect(isSwar('ऍ')).toBeTruthy();
    expect(isSwar('ऑ')).toBeTruthy();
    expect(isSwar('ॲ')).toBeTruthy();
});

test('अर्धचंद्रकार स्वरों की मत्राएँ', () => {
    expect(matraToSwar('ॅ')).toBe('ऍ');
    expect(matraToSwar('ॉ')).toBe('ऑ');
})