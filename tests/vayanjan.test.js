const { viched } = require('../src/varnviched.js');
const { MOOL_VANYANJAN } = require('../src/vayanjan.js');

MOOL_VANYANJAN.forEach(vayanjan => {
    test(`Viched ${vayanjan}`, () => {
        const expectedResult = [vayanjan + '्', 'अ'];
        expect(viched(vayanjan)).toStrictEqual(expectedResult);
    });
});
