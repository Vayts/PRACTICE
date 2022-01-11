const {MyString} = require('../src/task1')

describe('reverse', () => {
    const testString = new MyString();
    test('test test', ()=> {
        expect(testString.reverse('test test')).toBe('tset tset')
    })
    test('null', ()=> {
        expect(testString.reverse(null)).toBe('Invalid input data')
    })
    test('12', ()=> {
        expect(testString.reverse(1)).toBe('Invalid input data')
    })
})

describe('ucFirst', () => {
    const testString = new MyString();
    test('test test', ()=> {
        expect(testString.ucFirst('test test')).toBe('Test test')
    })
    test('null', ()=> {
        expect(testString.ucFirst(null)).toBe('Invalid input data')
    })
    test('12', ()=> {
        expect(testString.ucFirst(12)).toBe('Invalid input data')
    })
})

describe('ucWords', () => {
    const testString = new MyString();
    test('test test', ()=> {
        expect(testString.ucWords('test test')).toBe('Test Test')
    })
    test('null', ()=> {
        expect(testString.ucWords(null)).toBe('Invalid input data')
    })
    test('12', ()=> {
        expect(testString.ucWords(12)).toBe('Invalid input data')
    })
})