const MOOL_VANYANJAN = [
    'क', 'ख', 'ग', 'घ', 'ङ',
    'च', 'छ', 'ज', 'झ', 'ञ',
    'ट', 'ठ', 'ड', 'ढ', 'ण',
    'त', 'थ', 'द', 'ध', 'न',
    'प', 'फ', 'ब', 'भ', 'म',
    'य', 'र', 'ल', 'व', 'श',
    'ष', 'स', 'ह',

    // Normalized nukta vayanajan
    'क़', 'ख़', 'ग़', 'ज़', 'ड़',
    'ढ़', 'फ़', 'य़', 'ऩ', 'ऱ',
    'ऴ'
];

const SANYUKT_VAYANJAN = [
    'क्ष', 'त्र', 'ज्ञ', 'श्र'
]

const VAYANJAN = [...MOOL_VANYANJAN, ...SANYUKT_VAYANJAN];

const isVayanjan = varn => VAYANJAN.includes(varn);

module.exports.MOOL_VANYANJAN = MOOL_VANYANJAN;
module.exports.SANYUKT_VAYANJAN = SANYUKT_VAYANJAN;
module.exports.VAYANJAN = VAYANJAN;

module.exports.isVayanjan = isVayanjan;
