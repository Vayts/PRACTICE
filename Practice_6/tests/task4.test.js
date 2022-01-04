const voidCheck = require('../src/task4')

describe('voidCheck', () => {
    test('{ a: 3, c: 2}', () => {
        expect(voidCheck({ a: 3, c: 2})).toEqual(false)
    })
    test('{ a: 3, c:undefined}, { c: 2, a: 3 }', () => {
        expect(voidCheck({ a: 3, c: undefined}, { c: 2, a: 3 })).toEqual(true)
    })
    test('{}, { c: 1, a: 3 }', () => {
        expect(voidCheck({})).toEqual(true)
    })
    test('"string"', () => {
        expect(voidCheck('string')).toEqual('Invalid input data')
    })
})