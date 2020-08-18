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