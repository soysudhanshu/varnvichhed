const { isSwar, isMatra, matraToSwar } = require('./swar.js');
const { isVayanjan } = require('./vayanjan.js');
const { addHalant, isHalant, devanagariNormalize, isAnunasik, addAnunasik } = require('./helpers.js');

const viched = sabdh => {
    sabdh = sabdh.trim();
    sabdh = devanagariNormalize(sabdh);
    
    const vichhed = [];

    let index = 0;
    for (const char of sabdh) {
        const varns = [];

        const nextChar = sabdh[index + 1] ?? '';
        const previousChar = sabdh[index - 1] ?? '';

        if (isSwar(char)) {
            varns.push(char);
        }

        if (
            isVayanjan(char) &&
            (
                isVayanjan(nextChar) || isSwar(nextChar) || 
                isAnunasik(nextChar) || nextChar === ''
            )
        ) {
            varns.push(addHalant(char));
            varns.push('अ');
        }
        
        /**
         * For sanyunkt vayanjan
         */
        if (isVayanjan(char) && isHalant(nextChar)){
            varns.push(addHalant(char));
        }

        /**
         * व्यंजन पर लगी मात्राओं का विच्छेद
         */
        if (isVayanjan(char) && isMatra(nextChar)) {
            varns.push(addHalant(char));
            varns.push(matraToSwar(nextChar));
        }

        if(isAnunasik(char)){
            const lastVichhedVarn = vichhed[vichhed.length - 1];
            if(isSwar(lastVichhedVarn)){
                vichhed.push(addAnunasik(vichhed.pop()));
            }
        }

        vichhed.push(...varns);
        ++index;
    }

    return vichhed;
}

module.exports.viched = viched;