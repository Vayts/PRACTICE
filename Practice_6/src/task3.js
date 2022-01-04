function uniqArr(arr) {

    if (!Array.isArray(arr)) {
        return 'Invalid input data'
    }

    // легкий вариант
    // return [...new Set(arr)]

    // нормальный

    let result = [];
    arr.forEach((el) => {
        if (!result.includes(el)) {
            result.push(el)
        }
    })
    return result
}

module.exports = uniqArr;
