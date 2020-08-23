const { devanagariNormalize } = require("../src/helpers");

test('Test devangariNormalize()', () => {
    expect(devanagariNormalize('')).toBe('');
    expect(devanagariNormalize(null)).toBe('');
    expect(devanagariNormalize('a')).toBe('a');
    expect(devanagariNormalize(0)).toBe('');
    expect(devanagariNormalize(undefined)).toBe('');
    expect(devanagariNormalize(1)).toBe('1');

    expect(devanagariNormalize('\u0915\u093C')).toBe('\u0958');
    expect(devanagariNormalize('\u0916\u093C')).toBe('\u0959');
    expect(devanagariNormalize('\u0917\u093C')).toBe('\u095A');
    expect(devanagariNormalize('\u091C\u093C')).toBe('\u095B');
    expect(devanagariNormalize('\u0921\u093C')).toBe('\u095C');
    expect(devanagariNormalize('\u0922\u093C')).toBe('\u095D');
    expect(devanagariNormalize('\u092B\u093C')).toBe('\u095E');
    expect(devanagariNormalize('\u092F\u093C')).toBe('\u095F');

    expect(devanagariNormalize('\u0930\u093C')).toBe('\u0931');
    expect(devanagariNormalize('\u0928\u093C')).toBe('\u0929');
    expect(devanagariNormalize('\u0933\u093C')).toBe('\u0934');

    expect(devanagariNormalize('\u0917\u0952')).toBe('\u097B');
    expect(devanagariNormalize('\u091C\u0952')).toBe('\u097C');
    expect(devanagariNormalize('\u0921\u0952')).toBe('\u097E');
    expect(devanagariNormalize('\u092C\u0952')).toBe('\u097F');

    expect(devanagariNormalize('इज़्ज़त')).toBe('इज़्ज़त');
    expect(devanagariNormalize('दफ़्तर')).toBe('दफ़्तर');
});