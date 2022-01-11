const {Validator} = require('../src/task2');

let isEmailTrue = new Validator('test@gmail.com')
let isEmailFalse = new Validator('false')
let isEmailInvalid = new Validator(4)

describe('IsEmail', () => {
    test('test@gmail.com', () => {
        expect(isEmailTrue.isEmail()).toBe(true)
    })
    test('false', () => {
        expect(isEmailFalse.isEmail()).toBe(false)
    })
    test('4', () => {
        expect(isEmailInvalid.isEmail()).toBe('Invalid input data')
    })
})

let isDomainTrue = new Validator('test.com')
let isDomainFalse = new Validator('test/com')
let isDomainInvalid = new Validator(4)

describe('IsDomain', () => {
    test('test@gmail.com', () => {
        expect(isDomainTrue.isDomain()).toBe(true)
    })
    test('false', () => {
        expect(isDomainFalse.isDomain()).toBe(false)
    })
    test('4', () => {
        expect(isDomainInvalid.isDomain()).toBe('Invalid input data')
    })
})

let isPhoneTrue = new Validator('+380 (99)-278-87-08')
let isPhoneFalse = new Validator('test/com')
let isPhoneInvalid = new Validator(4)

describe('IsPhone', () => {
    test('test@gmail.com', () => {
        expect(isPhoneTrue.isPhone()).toBe(true)
    })
    test('false', () => {
        expect(isPhoneFalse.isPhone()).toBe(false)
    })
    test('4', () => {
        expect(isPhoneInvalid.isPhone()).toBe('Invalid input data')
    })
})

let isDateTrue = new Validator('20.12.2001')
let isDateFalse = new Validator('test/com')
let isDateInvalid = new Validator(4)

describe('IsDate', () => {
    test('test@gmail.com', () => {
        expect(isDateTrue.isDate()).toBe(true)
    })
    test('false', () => {
        expect(isDateFalse.isDate()).toBe(false)
    })
    test('4', () => {
        expect(isDateInvalid.isDate()).toBe('Invalid input data')
    })
})

