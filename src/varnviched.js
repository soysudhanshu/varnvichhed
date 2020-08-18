const { isSwar } = require('./swar.js');
const { isVayanjan } = require('./vayanjan.js');
const { addHalant } = require('./helpers.js');

const viched = sabdh => {
    sabdh = sabdh.trim();
    const vichhed = [];

    for (char of sabdh) {
        const varns = [];

        if (isSwar(char)) {
            varns.push(char);
        }

        if (isVayanjan(char)){
            varns.push(addHalant(char));
            varns.push('अ');
        }

        vichhed.push(...varns);
    }

    return vichhed;
}

module.exports.viched = viched;