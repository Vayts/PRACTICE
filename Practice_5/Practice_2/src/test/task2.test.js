const breakCycle = require('../practice/task2')

describe('breakCycle', () => {
    test('15 14', () => {
        expect(breakCycle()).toBe('15 15')
    })
})