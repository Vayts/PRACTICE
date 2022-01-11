class Validator {

    isEmail(str) {

        if (typeof str !== 'string') {
            return 'Invalid input data'
        }

        const reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

        if (str.match(reg)) {
            return true
        }
        return false;
    }

    isDomain(str) {

        if (typeof str !== 'string') {
            return 'Invalid input data'
        }

        const reg = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

        if (str.match(reg)) {
            return true
        }
        return false
    }

    isDate(str) {

        if (typeof str !== 'string') {
            return 'Invalid input data'
        }

        const reg = /^(0?[1-9]|[12][0-9]|3[01])[.\-](0?[1-9]|1[012])[.\-]\d{4}$/

        if (str.match(reg)) {
            return true
        }
        return false
    }

    isPhone(str) {
        if (typeof str !== 'string') {
            return 'Invalid input data'
        }

        const reg = /^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/

        if (str.match(reg)) {
            return true
        }
        return false
    }

}

module.exports = {Validator}