const {isSwar} = require('./swar.js');

const VAYANJANO = [
    'क', 'ख', 'ग', 'घ', 'ङ',
    'च', 'छ', 'ज', 'झ', 'ञ',
    'ट', 'ठ', 'ड', 'ढ', 'ण',
    'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म',
    'य', 'र', 'ल', 'व', 'श',
    'ष', 'स', 'ह'
];

const MATRAYE = [

    "ा", "ि", "ी", "ु", "ू",
    "े", "ै", "ो", "ौ", "ृ",
    "ॄ", "ॅ", "ॆ", "ॉ", "ॊ"

];

const MODIFIERS = [
    'ं', 'ँ', 'ः'
]
const MODIFIERS_VARN_RISHTA = {
    'ं': 'अं',
    'ँ': 'अँ',
    'ः': 'अः '
}

const MATRA_SWAR_RISHTA = {
    'ा': "आ",
    'ि': "इ",
    'ी': "ई",
    'ु': "उ",
    'ू': "ऊ",
    'े': "ए",
    'ै': "ऐ",
    'ो': "ओ",
    'ौ': "औ",
    'ृ': 'ऋ',
    'ॄ': 'ऌ',
    'ॅ': 'ऍ',
    'ॆ': 'ऎ',
    'ॉ': 'ऑ',
    'ॊ': 'ऒ'
};

/**
 * Check if given Varn is a Viyanjan.
 * @param {string} char 
 */
const isViyanjan = char => {
    return VAYANJANO.includes(char);
}

/**
 * Check if given char is a Matra.
 */
const isMatra = char => {
    return MATRAYE.includes(char);
}

/**
 * 
 * @param {string} char 
 */
const isHalant = char => {
    return char === '्';
}

const addHalant = char => {
    return char + '्';
}

const matraSeSwar = matra => {
    if (!isMatra(matra)) {
        throw new Error('दिया हुआ वर्ण मात्रा नहि है।');
    }
    return MATRA_SWAR_RISHTA[matra];
}


const isModifier = varn => {
    return MODIFIERS.includes(varn);
}
const modifierSeVarn = modifier => {
    return MODIFIERS_VARN_RISHTA[modifier];
}

const moolRoop = (varn, nextVarn) => {

    if (isSwar(varn)) {
        return [varn];
    }

    if (isViyanjan(varn) && isHalant(nextVarn)) {
        return [addHalant(varn)];
    }

    if (isViyanjan(varn) && isViyanjan(nextVarn)) {
        return [addHalant(varn), 'अ']
    }

    if (isViyanjan(varn) && isMatra(nextVarn)) {
        return [addHalant(varn)];
    }

    if (isViyanjan(varn) && nextVarn === '') {
        return [addHalant(varn), 'अ'];
    }

    if (isViyanjan(varn) && isModifier(nextVarn)) {
        return [addHalant(varn), modifierSeVarn(nextVarn)];
    }

    if (isMatra(varn)) {
        return [matraSeSwar(varn)];
    }


    return [];
}

const viched = sabdh => {
    sabdh = sabdh.trim();
    const varns = [...sabdh];
    const swatantrVarns = [];
    let index = 0;
    for (const varn of varns) {

        let nextVarn = varns[index + 1] ?? '';
        nextVarn = nextVarn.trim();
        const hissase = moolRoop(varn, nextVarn);
        swatantrVarns.push(...hissase);
        ++index;
    }

    return swatantrVarns;
}

module.exports.viched = viched;