const doSum = require('../practice/task3')


describe('doSum', () => {
    test('("5", 15)', () => {
        expect(doSum('5', 15)).toBe(-10)
    })
    test('("3", 7)', () => {
        expect(doSum('3', 7)).toBe(10)
    })
    test('(null, 7)', () => {
        expect(doSum(null, 7)).toBe('Invalid input data')
    })
    test('("12", "a")', () => {
        expect(doSum('12', 'a')).toBe('Invalid input data')
    })
    test('("12", "")', () => {
        expect(doSum('12')).toBe('Invalid input data')
    })
    test('("фф", 12)', () => {
        expect(doSum("фф",12)).toBe('Invalid input data')
    })
    test('("", 12)', () => {
        expect(doSum('', 12)).toBe('Invalid input data')
    })
})