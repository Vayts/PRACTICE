const findObjectCrossing = require('../src/task1.js')

describe('findObjectCrossing', () => {
    test('{ a: 3, c: 2}, { c: 1, a: 3 }', () => {
        expect(findObjectCrossing({ a: 3, c: 2}, { c: 1, a: 3 })).toEqual({a: 3})
    })
    test('{ a: 3}, { c: 1, a: 3 }', () => {
        expect(findObjectCrossing({ a: 3, c: 2}, { c: 1, a: 3 })).toEqual({a: 3})
    })
    test('{}, { c: 1, a: 3 }', () => {
        expect(findObjectCrossing({}, { c: 1, a: 3 })).toEqual({})
    })
    test('{}, {}', () => {
        expect(findObjectCrossing({}, { c: 1, a: 3 })).toEqual({})
    })
    test('"X", {}', () => {
        expect(findObjectCrossing('X', { c: 1, a: 3 })).toEqual('Invalid input data')
    })
})