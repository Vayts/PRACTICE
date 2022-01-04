function logStringifyNumber(n) {
    if (typeof n !== 'number') {
        return 'Invalid input data'
    }
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('threeFive')
            result = result.concat('threeFive')
        } else if (i % 3 === 0) {
            console.log('three')
            result = result.concat('three')
        } else if (i % 5 === 0) {
            console.log('five')
            result = result.concat('five')
        } else {
            console.log(i)
            result = result.concat(i)
        }
    }
    return result
}

module.exports = logStringifyNumber;