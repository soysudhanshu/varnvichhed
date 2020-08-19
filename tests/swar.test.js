const { viched } = require('../src/varnviched.js');
const { SWARS } = require('../src/swar.js');

SWARS.forEach(swar => {
    test(`Do no viched ${swar.varn}`, () => {
        expect(viched(swar.varn)).toStrictEqual([swar.varn]);
    });
});