const {Validator} = require('../src/task2');

describe('IsEmail', () => {
    const validatorTest = new Validator();
    test('test@gmail.com', () => {
        expect(validatorTest.isEmail('test@gmail.com')).toBe(true)
    })
    test('testgmail.com', () => {
        expect(validatorTest.isEmail('testgmail.com')).toBe(false)
    })
    test('null', () => {
        expect(validatorTest.isEmail(null)).toBe('Invalid input data')
    })
    test('4', () => {
        expect(validatorTest.isEmail(4)).toBe('Invalid input data')
    })
})

describe('IsDomain', () => {
    const validatorTest = new Validator()
    test('test@gmail.com', () => {
        expect(validatorTest.isDomain('test.com')).toBe(true)
    })
    test('false', () => {
        expect(validatorTest.isDomain('test/com')).toBe(false)
    })
    test('4', () => {
        expect(validatorTest.isDomain(4)).toBe('Invalid input data')
    })
    test('null', () => {
        expect(validatorTest.isDomain(null)).toBe('Invalid input data')
    })
})

describe('IsPhone', () => {
    const validatorTest = new Validator();
    test('test@gmail.com', () => {
        expect(validatorTest.isPhone('+380 (99)-278-87-08')).toBe(true)
    })
    test('false', () => {
        expect(validatorTest.isPhone('test/com')).toBe(false)
    })
    test('4', () => {
        expect(validatorTest.isPhone(4)).toBe('Invalid input data')
    })
    test('null', () => {
        expect(validatorTest.isPhone(null)).toBe('Invalid input data')
    })
})

describe('IsDate', () => {
    const validatorTest = new Validator();
    test('test@gmail.com', () => {
        expect(validatorTest.isDate('20.12.2001')).toBe(true)
    })
    test('false', () => {
        expect(validatorTest.isDate('12/22/2011')).toBe(false)
    })
    test('4', () => {
        expect(validatorTest.isDate(4)).toBe('Invalid input data')
    })
    test('4', () => {
        expect(validatorTest.isDate(null)).toBe('Invalid input data')
    })
})

