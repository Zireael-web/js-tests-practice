const validateValue = require('./validateValue');

/* test('Валидация значения', () => {
    expect(validateValue(50)).toBe(true);
}) */

describe('Валидация значенИЙ', () => {
    test('валидное значение', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('Пограничное снизу', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('Пограничное сверху', () => {
        expect(validateValue(100)).toBe(true);
    })
    test('Меньше валидного', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('Больше валидного', () => {
        expect(validateValue(101)).toBe(false);
    })  
})