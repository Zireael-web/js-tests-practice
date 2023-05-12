const mapArrToStrings = require('./mapArrToStrings');

describe('Валидация значенИЙ', () => {
    test('валидный массив', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('числа и невалидные значения', () => {
        expect(mapArrToStrings([1, 'текст', null, undefined, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('ОТРИЦАНИЕ', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 10, 25]);
    })
})