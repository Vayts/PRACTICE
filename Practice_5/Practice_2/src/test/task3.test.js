const isAnagram = require('../practice/task3')

describe('isAnagram', () => {
    test('"cinema", "iceman"', () => {
        expect(isAnagram('cinema', 'iceman')).toBe(true)
    })
    test('"", "iceman"', () => {
        expect(isAnagram(null, 'iceman')).toBe('Invalid input data')
    })
    test('"cinema", ""', () => {
        expect(isAnagram('cinema', null)).toBe('Invalid input data')
    })
})