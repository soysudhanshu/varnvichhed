const SWARS = [
    { varn: 'अ', matra: null },
    { varn: 'आ', matra: 'ा' },
    { varn: 'इ', matra: 'ि' },
    { varn: 'ई', matra: 'ी' },
    { varn: 'उ', matra: 'ु' },
    { varn: 'ऊ', matra: 'ू' },
    { varn: 'ऋ', matra: 'ृ' },
    { varn: 'ए', matra: 'े' },
    { varn: 'ऐ', matra: 'ै' },
    { varn: 'ओ', matra: 'ो' },
    { varn: 'औ', matra: 'ौ' }
];

/**
 * Checks if given varn is Swar.
 * @param {string} varn
 * @returns {boolean} True if given varn is Swar.
 */
const isSwar = varn => SWARS.some(swar => swar.varn === varn);

/**
 * Verifies if given char is a Matra.
 * @param {string} char
 * @returns {boolean}
 */
const isMatra = char => SWARS.some(swar => (swar.matra === char && char !== null));

/**
 * Coverts matra into corresponding swar.
 * @param {string} matra
 * @returns {string|null} If no swar is found, then returned `null`.
 */
const matraToSwar = matra => {
    const swar = SWARS.filter(swar => (swar.matra === matra && matra !== null));

    if(swar.length === 0){
        return null;
    }

    return swar[0].varn;
}

module.exports.SWARS = SWARS;
module.exports.isSwar = isSwar;
module.exports.isMatra = isMatra;
module.exports.matraToSwar = matraToSwar;