const { isSwar } = require('./swar.js');
const { isVayanjan } = require('./vayanjan.js');
const { addHalant, isHalant } = require('./helpers.js');

const viched = sabdh => {
    sabdh = sabdh.trim();
    const vichhed = [];

    let index = 0;
    for (const char of sabdh) {
        const varns = [];

        const nextChar = sabdh[index + 1] ?? '';

        if (isSwar(char)) {
            varns.push(char);
        }

        if (isVayanjan(char) && nextChar === ''){
            varns.push(addHalant(char));
            varns.push('अ');
        }
        
        /**
         * For sanyunkt vayanjan
         */
        if (isVayanjan(char) && isHalant(nextChar)){
            varns.push(addHalant(char));
        }

        vichhed.push(...varns);
        ++index; 
    }

    return vichhed;
}

module.exports.viched = viched;