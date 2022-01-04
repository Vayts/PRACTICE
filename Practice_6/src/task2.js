function checkObjectEquality(objA, objB) {

    if (typeof objA !== 'object' || typeof objB !== 'object') {
        return 'Invalid input data'
    }

    let obj;

    if (Object.keys(objA).length > Object.keys(objB).length) {
        obj = objA;
    } else {
        obj = objB;
    }
    let result = false;

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

module.exports = checkObjectEquality;