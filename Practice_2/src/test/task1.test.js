const logStringifyNumber = require('../practice/task1')

describe('logStringifyNumber', () => {
    test('12', () => {
        expect(logStringifyNumber(12)).toStrictEqual([1,2,'three', 4,'five','three', 7,8,'three', 'five', 11,'three'])
    })
    test('a', () => {
        expect(logStringifyNumber('a')).toStrictEqual('Invalid input data')
    })
})