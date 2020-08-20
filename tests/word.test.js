const { viched } = require("../src/varnviched");

const {MATRAHIN_SHABD} = require('./data/मात्राहीन-शब्द.js');

test('Vichhed words without matra', () => {
    MATRAHIN_SHABD.forEach(shabd => {
        expect(viched(shabd.sabdh)).toStrictEqual(shabd.vichhed)
    });
});