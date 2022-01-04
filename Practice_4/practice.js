function isSumInArr(arr, num) {
    if (!Array.isArray(arr) || typeof num !== "number" || !arr || !num) {
        return 'Error'
    }
    for (let i = 0; i < arr.length; i++) {
        for(let m = 0; m < arr.length; m++) {
            if (i !== m && arr[i] + arr[m] === num) {
                return true
            }
        }
    }
    return false
}

function getConcatArr(arr) {
    if (!arr || !Array.isArray(arr)) {
        return 'Error'
    }
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            return 'Error'
        }
        result = result.concat(arr[i])
    }
    return result
}

function getSplitArr(arr, counter) {
    if (!Array.isArray(arr) || typeof counter !== "number" || !arr || !counter) {
        return 'Error'
    }
    let divider = Math.ceil(arr.length/counter)
    let result = []
    let position = 0;
    for (let i = 0; i < divider; i++) {
        result[i] = []
        for (let m = position; m < arr.length; m++) {
            if (result[i].length === counter) {
                break;
            } else {
                position++
                result[i].push(arr[m])
            }

        }
    }
    return result
}

function easyCheckObjectEquality(objA, objB) {
    let result = true;
    for (let key in objA) {
        const valueA = objA[key]
        const valueB = objB[key]
        let valuesIsObject = false;
        if (valueB !== null && typeof valueB === 'object' && valueA !== null && typeof valueA === 'object') {
            valuesIsObject = true;
        }
        if (valuesIsObject && !easyCheckObjectEquality(valueA, valueB) ||
            !valuesIsObject && valueA !==  valueB) {
            result = false;
        }
    }
    return result
}

