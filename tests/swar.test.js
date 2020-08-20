const { viched } = require('../src/varnviched.js');
const { SWARS, isMatra } = require('../src/swar.js');

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