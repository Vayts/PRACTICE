const checkNumber = require('../practice/task4')

describe('checkNumber', () => {
    test('7', () => {
        expect(checkNumber(7)).toStrictEqual([true,false,false])
    })
    test('0', () => {
        expect(checkNumber(0)).toStrictEqual([false,false,false])
    })
    test('-10', () => {
        expect(checkNumber(-10)).toStrictEqual([false,true,true])
    })
    test('a', () => {
        expect(checkNumber('a')).toStrictEqual('Invalid input data')
    })
    test('3', () => {
        expect(checkNumber(3)).toStrictEqual([true,false,false])
    })
})