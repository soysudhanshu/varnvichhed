const {viched} = require('../src/varnviched.js');


test('do not viched swar', ()=> {
    const parts = viched('अ');
    expect(parts).toEqual(['अ']);
});