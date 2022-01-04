function findObjectCrossing(objA, objB) {
    if (typeof objA !== 'object' || typeof objB !== 'object') {
        return 'Invalid input data'
    }

    let result = {};

    for (let key in objA) {
        if(objB.hasOwnProperty(key)) {
            if (objB[key] === objA[key]) {
                result[key] = objA[key]
            }
        }
    }
    return result
}

module.exports = findObjectCrossing;
