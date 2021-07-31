const addHalant = char => {
    return char + '्';
}

const isHalant = char => {
    return char === '्';
}

const isAnunasik = char => {
    return char === 'ँ';
}

const addAnunasik = char => {
    return char + 'ँ';
}

const isVisarg = char => {
    return char === 'ः'
}

const addVisarg = char => {
    return char + 'ः';
}

const isAnuswar = char => {
    return char === 'ं';
}

const addAnuswar = char => {
    return char + 'ं';
}

/**
 * अनुस्वार को पंचम वर्ण में बदले।
 *
 * `बदलने के नियम।`
 * 1. अगर वर्ण पर कोई मात्रा लगी हो
 * जो शिरोरेखा से ऊपर जाती हैं तो अनुस्वार का
 * परिवर्तन ना करें। क्योंकि वो अनुनासिक को भी
 * हो सकता हैं।
 *
 * 2. अगर अनुस्वार के बाद `य, र, ल, व,
 * श, ष, स, ह` में से कोई भी आए तो
 * अनुस्वार को पंचम वर्ण में नहीं बदला जा सकता।
 * @param {string} shabd
 */
const anuswarSeVarn = shabd => {
    shabd = devanagariNormalize(shabd);
    const varns = [...shabd];

    const ushmAndAntasthViyanjan = [
        'य', 'र', 'ल', 'व',
        'श', 'ष', 'स', 'ह'
    ];

    /**
     * हम पंचम वर्णो को शामिल नहीं करेंगे क्योंकि
     * उनसे पहले अनुस्वार का प्रयोग नहीं किया जा
     * सकता।
     */
    const vargs = {
        'क': /[\u0915-\u0918]/,
        'च': /[\u091A-\u091D]/,
        'ट': /[\u091F-\u0922]/,
        'त': /[\u0924-\u0928]/,
        'प': /[\u092A-\u092D]/
    };

    const शिरो_रेखा_के_ऊपर_की_मात्राएँ = [
        'ि', 'ी', 'े', 'ै', 'ो', 'ौ'
    ]

    const शिरो_रेखा_के_ऊपर_वाले_स्वर = [
        'ई', 'ऐ', 'ओ', 'औ'
    ]

    const doNotConvert = [
        ...शिरो_रेखा_के_ऊपर_की_मात्राएँ,
        ...शिरो_रेखा_के_ऊपर_वाले_स्वर
    ];

    let index = 0;
    let newWord = '';

    for (const char of varns) {
        const nextChar = varns[index + 1] ?? '';
        const prevChar = varns[index - 1] ?? '';


        let output = '';
        if (isAnuswar(char)) {
            /**
             * अगर अनुस्वार के आगे अंतस्थ या ऊष्म व्यंजन आए
             * तो अनुस्वार का प्रयोग नहीं होगा।
             */

            if (ushmAndAntasthViyanjan.includes(nextChar) || doNotConvert.includes(prevChar)) {
                output += 'ं';
            } else if (vargs.क.test(nextChar)) {
                output += 'ङ्';
            } else if (vargs.च.test(nextChar)) {
                output += 'ञ्';
            } else if (vargs.ट.test(nextChar)) {
                output += 'ण्';
            } else if (vargs.त.test(nextChar)) {
                output += 'न्';
            } else if (vargs.प.test(nextChar)) {
                output += 'म्';
            } else {
                output += 'ं';
            }

        } else {
            output += char;
        }
        newWord += output;
        ++index;
    }

    /**
     * Common edge cases
     */
    newWord = newWord.replace('हिंद', 'हिन्द');
    newWord = newWord.replace('बिंद', 'बिन्द');
    newWord = newWord.replace('लिंग', 'लिङ्ग');
    newWord = newWord.replace('एवं', 'एवम्');

    return newWord;
}

/**
 * Normalizes a devanagari string.
 *
 * @param {string} string
 * @returns {string}
 */
const devanagariNormalize = string => {
    if (!string) {
        return '';
    }

    string = String(string);

    const normalizationChart = {
        '\u0915\u093C': '\u0958',
        '\u0916\u093C': '\u0959',
        '\u0917\u093C': '\u095A',
        '\u091C\u093C': '\u095B',
        '\u0921\u093C': '\u095C',
        '\u0922\u093C': '\u095D',
        '\u092B\u093C': '\u095E',
        '\u092F\u093C': '\u095F',

        '\u0930\u093C': '\u0931',
        '\u0928\u093C': '\u0929',
        '\u0933\u093C': '\u0934',

        '\u0917\u0952': '\u097B',
        '\u091C\u0952': '\u097C',
        '\u0921\u0952': '\u097E',
        '\u092C\u0952': '\u097F'
    }

    let normalized = string.normalize();
    for (const decomposedChar in normalizationChart) {
        const regex = new RegExp(decomposedChar, 'g');
        normalized = normalized.replace(regex, normalizationChart[decomposedChar]);
    }
    return normalized;
}

module.exports.addHalant = addHalant;
module.exports.isHalant = isHalant;
module.exports.devanagariNormalize = devanagariNormalize;
module.exports.isAnunasik = isAnunasik;
module.exports.addAnunasik = addAnunasik;
module.exports.isVisarg = isVisarg;
module.exports.addVisarg = addVisarg;
module.exports.anuswarSeVarn = anuswarSeVarn;
module.exports.isAnuswar = isAnuswar;
module.exports.addAnuswar = addAnuswar;