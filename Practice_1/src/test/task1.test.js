const {isPalindrome} = require("../practice/task1");

describe('isPalindrome', () => {
    test('Are we not drawn onward, we few, drawn onward to new era?', () => {
        expect(isPalindrome('Are we not drawn onward, we few, drawn onward to new era?')).toBe(true)
    })
    test('Anna', () => {
        expect(isPalindrome('Anna')).toBe(true)
    })
    test('AnnaA', () => {
        expect(isPalindrome('AnnaA')).toBe(false)
    })
    test('111', () => {
        expect(isPalindrome(111)).toBe('Invalid input data')
    })
    test('A', () => {
        expect(isPalindrome('A')).toBe('Invalid input data')
    })
    test('null', () => {
        expect(isPalindrome(null)).toBe('Invalid input data')
    })

})