const SWARS = [
    'अ', 'आ',
    'इ', 'ई',
    'उ', 'ऊ',
    'ऋ',
    'ए', 'ऐ',
    'ओ', 'औ'
];

/**
 * Checks if given varn is Swar.
 * @param {string} varn
 * @returns {boolean} True if given varn is Swar.
 */
const isSwar = varn => SWARS.includes(varn);


module.exports.SWARS = SWARS;
module.exports.isSwar = isSwar;
