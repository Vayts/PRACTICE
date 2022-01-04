const obj = {
    a: 100,
    b: 200
}

function sum (c) {
    return this.a + this.b + c
}



function myBind(fn, context, ...rest) {
    return function (...args) {
        let uniqKey = Date.now().toString()
        context[uniqKey] = fn;
        const result = context[uniqKey](...rest.concat(...args))

        delete context[uniqKey]
        return result
    }
}

console.log(myBind(sum, obj)(100))

module.exports = myBind;

