function checkNumber(value) {

    if (typeof value !== 'number') {
        return 'Invalid input data'
    }

    let result = [false, false, false]

    if (value === 0) {
        return result
    }

    if (value > 0) {
        result[0] = true;
        for (let i = 2; i < value; i++) {
            if (value % i === 0) {
                result[0] = false;
            }
        }
    }

    if (value % 2 === 0) {
        result[1] = true;
    }

    if (value % 10 === 0) {
        result[2] = true;
    }

    return result
}

module.exports = checkNumber;