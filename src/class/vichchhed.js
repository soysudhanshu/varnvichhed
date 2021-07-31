const { isSwar, isMatra, matraToSwar, SWARS } = require('../swar.js');
const { isVayanjan } = require('../vayanjan.js');
const { addHalant, isHalant, devanagariNormalize, isAnunasik, addAnunasik, isVisarg, addVisarg, anuswarSeVarn, isAnuswar, addAnuswar } = require('../helpers.js');

class Vichchhed {
    /**
     * Vichchheds a word
     * @param {string} word String in Devanagari script
     */
    static vichchhed(word) {
        const sabdh = Vichchhed.#normalize(word);

        const vichhed = [];

        let index = 0;
        for (const char of sabdh) {
            const varns = [];

            const nextChar = sabdh[index + 1] ?? '';
            const previousChar = sabdh[index - 1] ?? '';

            if (isSwar(char)) {
                varns.push(char);
            }

            if (isVayanjan(char)) {
                const vichchhed = Vichchhed.#viyanjanVichchhed(char, nextChar);
                varns.push(...vichchhed);
            }

            if (isAnunasik(char)) {
                const lastVichhedVarn = vichhed[vichhed.length - 1];
                if (isSwar(lastVichhedVarn)) {
                    vichhed.push(addAnunasik(vichhed.pop()));
                }
            }

            if (isAnuswar(char)) {
                const lastVichhedVarn = vichhed[vichhed.length - 1];

                if (isSwar(lastVichhedVarn)) {
                    const lastSwar = vichhed.pop();
                    /**
                     * शब्द के अंत में अगर ए या इ की मात्रा पर अनुस्वार लगा हो तो
                     * उसे अनुनासिक में बदले।
                     */
                    if (['ए', 'इ'].includes(lastSwar) && nextChar === '') {
                        vichhed.push(addAnunasik(lastSwar));
                    } else {
                        vichhed.push(addAnuswar(lastSwar));
                    }

                }
            }

            /**
             * इंटर्नेट पर ॐ (\u0950) के स्थान पर ऊँः (\u090A\u0901\u0903)
             * का प्रयोग भी किया जाता है।
             *
             * लेकिन व्याकरण के अनुसार अमनिया होने के कारण इसका वर्ण विच्छेद नहीं
             * किया जाएगा।
             **/
            if (isVisarg(char)) {
                const lastVichhedVarn = vichhed[vichhed.length - 1];
                if (isSwar(lastVichhedVarn)) {
                    vichhed.push(addVisarg(vichhed.pop()));
                }
            }

            vichhed.push(...varns);
            ++index;
        }

        return vichhed;
    }

    static #normalize(word) {
        word = word.trim();
        word = devanagariNormalize(word);
        word = anuswarSeVarn(word);

        return word;
    }

    /**
     * @param {string} currentChar
     * @param {string} nextChar
     */
    static #viyanjanVichchhed(char, nextChar) {
        const vichchhed = [];

        vichchhed.push(addHalant(char));

        if (isSwar(nextChar)) {
            vichchhed.push('अ');
        }

        if (isVayanjan(nextChar)) {
            vichchhed.push('अ');
        }

        if (isAnunasik(nextChar)) {
            vichchhed.push(addAnunasik('अ'));
        }

        if (isVisarg(nextChar)) {
            vichchhed.push(addVisarg('अ'));
        }

        if (nextChar === '') {
            vichchhed.push('अ');
        }

        if (isMatra(nextChar)) {
            vichchhed.push(matraToSwar(nextChar));
        }


        return vichchhed;
    }
}

module.exports.Vichchhed = Vichchhed;