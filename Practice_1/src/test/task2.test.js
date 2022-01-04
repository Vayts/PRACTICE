const {validChecker, specialSymbolsCheck} = require('../practice/task2')

describe('validChecker', () => {
    test('A21G!', () => {
        expect(validChecker('A21G!')).toBe('Valid')
    })
    test('A21G', () => {
        expect(validChecker('A21G')).toBe('Invalid')
    })
    test('a21G', () => {
        expect(validChecker('a21G')).toBe('Invalid')
    })
    test('A2', () => {
        expect(validChecker('A2')).toBe('Invalid')
    })
    test('А32ф12', () => {
        expect(validChecker('А32ф12')).toBe('Invalid')
    })
    test('null', () => {
        expect(validChecker(null)).toBe('Invalid input data')
    })
})

describe('checkSpecialSymbols', () => {
    test('!', () => {
        expect(specialSymbolsCheck('!')).toBe(true)
    })
    test('?', () => {
        expect(specialSymbolsCheck('!')).toBe(true)
    })
    test('1', () => {
        expect(specialSymbolsCheck(1)).toBe(false)
    })
    test('""', () => {
        expect(specialSymbolsCheck()).toBe(false)
    })
})
