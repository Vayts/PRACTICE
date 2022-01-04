const myBind = require('../src/task5')

const obj = {
    a: 100,
    b: 200
}

function sum (c) {
    return this.a + this.b + c
}


describe('myBind', () => {
    test('{ a: 3, c: 2}', () => {
        expect(myBind(sum, obj)(100)).toBe(400)
    })
    test('{ a: 3, c:undefined}, { c: 2, a: 3 }', () => {
        expect(myBind({ a: 3, c: undefined}, { c: 2, a: 3 })).toEqual(true)
    })
    test('{}, { c: 1, a: 3 }', () => {
        expect(myBind({})).toEqual(true)
    })
    test('"string"', () => {
        expect(myBind('string')).toEqual('Invalid input data')
    })
})