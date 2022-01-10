function myBind(fn, context) {

    if (typeof fn !== 'function') {
        return 'Invalid input data'
    }

    if (typeof context !== 'object') {
        return 'Invalid input data'
    }

    return function (...args) {
        let uniqKey = Date.now().toString()
        context[uniqKey] = fn;
        const result = context[uniqKey](...args)

        delete context[uniqKey]
        return result
    }
}

module.exports = myBind;

