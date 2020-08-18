const { viched } = require('../src/varnviched.js');
const { MOOL_VANYANJAN } = require('../src/vayanjan.js');

MOOL_VANYANJAN.forEach(vayanjan => {
    test(`Viched ${vayanjan}`, () => {
        const expectedResult = [vayanjan + '्', 'अ'];
        expect(viched(vayanjan)).toStrictEqual(expectedResult);
    });
});

test('Vichhed sanyukt vayanjan क्ष', () => {
    const expectedResult = ['क्', 'ष्', 'अ'];
    expect(viched('क्ष')).toStrictEqual(expectedResult);
});

test('Vichhed sanyukt vayanjan त्र', () => {
    const expectedResult = ['त्', 'र्', 'अ'];
    expect(viched('त्र')).toStrictEqual(expectedResult);
});

test('Vichhed sanyukt vayanjan ज्ञ', () => {
    const expectedResult = ['ज्', 'ञ्', 'अ'];
    expect(viched('ज्ञ')).toStrictEqual(expectedResult);
});

test('Vichhed sanyukt vayanjan श्र', () => {
    const expectedResult = ['श्', 'र्', 'अ'];
    expect(viched('श्र')).toStrictEqual(expectedResult);
});

/**
 * द्वित्व व्यंजन
 */
test('Vichhed द्वित्व व्यंजन', () => {
    const tests = [
        {
            vayanjan: 'च्च', // जैसे बच्चा
            vichhed : ['च्', 'च्', 'अ']
        },
        {
            vayanjan: 'म्म', // जैसे मम्मी
            vichhed : ['म्', 'म्', 'अ']
        },
        {
            vayanjan: 'त्त', // जैसे कुत्ता
            vichhed : ['त्', 'त्', 'अ']
        },
        {
            vayanjan: 'क्क', // जैसे ढक्कन 
            vichhed : ['क्', 'क्', 'अ']
        }   
    ];

    tests.forEach( test => {
        expect(viched(test.vayanjan)).toStrictEqual(test.vichhed);
    });
});