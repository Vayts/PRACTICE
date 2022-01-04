const uniqArr = require('../src/task3')

describe('checkObjectEquality', () => {
    test('[1,2,2,3,4,5]', () => {
        expect(uniqArr([1,2,2,3,4,5])).toEqual([1,2,3,4,5])
    })
    test('[1,1,1,1,1,1,1,1,11,1,2,2,3,4,5]', () => {
        expect(uniqArr([1,1,1,1,1,1,1,1,11,1,2,2,3,4,5])).toEqual([1,11,2,3,4,5])
    })
    test('[1]', () => {
        expect(uniqArr([1])).toEqual([1])
    })
    test('"string"', () => {
        expect(uniqArr('string')).toEqual('Invalid input data')
    })
})