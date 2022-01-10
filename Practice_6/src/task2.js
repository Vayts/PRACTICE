function checkObjectEquality(objA, objB) {

    if (!objA || !objB) {
        return 'Invalid input data'
    }

    if (typeof objA !== 'object' || typeof objB !== 'object') {
        return 'Invalid input data'
    }

    let obj = objA;

    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
    }

    let result = true;

    for (let key in obj) {
        const valueA = objA[key]
        const valueB = objB[key]
        let valuesIsObject = false;

        if (valueB !== null && typeof valueB === 'object' && valueA !== null && typeof valueA === 'object') {
            valuesIsObject = true;
        }

        if (valuesIsObject && !checkObjectEquality(valueA, valueB) ||
            !valuesIsObject && valueA !==  valueB) {
            result = false;
        }
    }
    return result
}

console.log(checkObjectEquality({a: 3, c: 2}, {c:2, a: 3}))

module.exports = checkObjectEquality;