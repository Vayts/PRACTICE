const checkObjectEquality = require('../src/task2')

describe('checkObjectEquality', () => {
    test('{ a: 3, c: 2}, { c: 1, a: 3 }', () => {
        expect(checkObjectEquality({ a: 3, c: 2}, { c: 1, a: 3 })).toEqual(false)
    })
    test('{ a: 3, c:2}, { c: 2, a: 3 }', () => {
        expect(checkObjectEquality({ a: 3, c: 2}, { c: 2, a: 3 })).toEqual(true)
    })
    test('{}, { c: 1, a: 3 }', () => {
        expect(checkObjectEquality({}, { c: 1, a: 3 })).toEqual(false)
    })
    test('"X", { c: 1, a: 3 }', () => {
        expect(checkObjectEquality('X', { c: 1, a: 3 })).toEqual('Invalid input data')
    })
})