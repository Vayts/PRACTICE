function  validChecker(str) {

    if (typeof str !== 'string') {
        return 'Invalid input data'
    } else if (str.length < 3 || str.length >= 20) {
        return 'Invalid'
    } else if ((str.charCodeAt(0) < 65 || str.charCodeAt(0) > 90)) {
        return  'Invalid'
    } else if  (!str.split('').some(specialSymbolsCheck)) {
        return  'Invalid'
    } else {
        return  'Valid'
    }
}

function specialSymbolsCheck(symbol) {
    if (!symbol && symbol !== 0) {
        return false
    }

    let specialSymbols =  [',','!',':', '-', '?','.',' ']
    for (let i = 0; i < specialSymbols.length; i++) {

        if (symbol === specialSymbols[i]) {
            return true
        }

    }
    return false;
}


module.exports = {specialSymbolsCheck, validChecker}