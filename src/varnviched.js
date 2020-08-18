const { isSwar } = require('./swar.js');

const viched = sabdh => {
    sabdh = sabdh.trim();
    const vichhed = [];

    for (char of sabdh) {
        const varns = [];

        if (isSwar(char)) {
            varns.push(char);
        }

        vichhed.push(...varns);
    }

    return vichhed;
}

module.exports.viched = viched;