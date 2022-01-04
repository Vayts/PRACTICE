function isAnagram(strFirst, strSecond) {
    if (typeof strFirst !== "string" || typeof strSecond !== "string") {
        return 'Invalid input data'
    }
    let reg = /[^a-zа-я0-9]+/g;
    let convertedFirstString = strFirst.replace(reg, '').split('').sort().join('');
    let convertedSecondString = strSecond.replace(reg, '').split('').sort().join('');
    return convertedSecondString === convertedFirstString;
}

module.exports = isAnagram;