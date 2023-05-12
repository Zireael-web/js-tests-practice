const delay = require('./delay');

describe('delay test', () => {
    test('Корректное значение', async () => {
        const sum = await delay(() => 5 + 5, 3000);
        expect(sum).toBe(10);
    })
})