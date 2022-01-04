function isPalindrome(str) {

    if (typeof str !== 'string') {
        return 'Invalid input data'
    }

    if (str.length < 2) {
        return 'Invalid input data'
    }
    let reg = /[^a-zа-я]+/g
    let reversedStr = str
        .toLowerCase()
        .replace(reg, '')
        .split('')
        .reverse()
        .join('')
    let simplifyStr = str
        .toLowerCase()
        .replace(reg, '');
    return reversedStr === simplifyStr
}

module.exports = {isPalindrome};