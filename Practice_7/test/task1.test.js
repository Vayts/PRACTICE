const {MyString} = require('../src/task1')

let testString = new MyString('test test')
let testStringNull = new MyString(null)
let testStringInvalid = new MyString(12)


describe('reverse', () => {
    test('test test', ()=> {
        expect(testString.reverse()).toBe('tset tset')
    })
    test('null', ()=> {
        expect(testStringNull.reverse()).toBe('Invalid input data')
    })
    test('12', ()=> {
        expect(testStringInvalid.reverse()).toBe('Invalid input data')
    })
})

describe('ucFirst', () => {
    test('test test', ()=> {
        expect(testString.ucFirst()).toBe('Test test')
    })
    test('null', ()=> {
        expect(testStringNull.ucFirst()).toBe('Invalid input data')
    })
    test('12', ()=> {
        expect(testStringInvalid.ucFirst()).toBe('Invalid input data')
    })
})

describe('ucWords', () => {
    test('test test', ()=> {
        expect(testString.ucWords()).toBe('Test Test')
    })
    test('null', ()=> {
        expect(testStringNull.ucWords()).toBe('Invalid input data')
    })
    test('12', ()=> {
        expect(testStringInvalid.ucWords()).toBe('Invalid input data')
    })
})