const square = require('./square');

describe('Квадрат', () => {
    let mockValue;

    // вызывается перед каждым тестом

    /* beforeEach(() => {
        mockValue = Math.random();
    }) */
    
    // вызывается 1 раз перед тестом в целом

   /*  beforeAll(() => {

    }) */

    test('Валидное значение, тест с Mock', () => {
        // expect(square(mockValue)).toBe(4);
        // expect(square(mockValue)).toBeLessThan(5);
        // expect(square(mockValue)).toBeGreaterThan(3);
        // expect(square(mockValue)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);  
    })

    test('Валидное значение, тест с Mock', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);  
    })


    afterEach(() => {
        jest.clearAllMocks()
    })

    /* afterAll() */
})