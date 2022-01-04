function voidCheck(obj) {

    if (typeof obj !== 'object') {
        return 'Invalid input data'
    }
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        for (let key in obj) {
            if (obj[key] === undefined || obj[key] === '') {
                return true
            }
        }
    }
    return false
}

module.exports = voidCheck;