const myBind = require('../src/task5')

const obj = {
    a: 100,
    b: 200
}

function sum (c) {
    return this.a + this.b + c
}


describe('myBind', () => {
    test('sum, { a: 100, b: 200}, arg: 100', () => {
        expect(myBind(sum, obj)(100)).toBe(400)
    })
    test('sum, { c: 2, a: 3 }', () => {
        expect(myBind(sum, obj)(2)).toEqual(302)
    })
    test('sum, 1', () => {
        expect(myBind(sum, 1)).toEqual('Invalid input data')
    })
    test('"string"', () => {
        expect(myBind('string', obj)).toEqual('Invalid input data')
    })
})