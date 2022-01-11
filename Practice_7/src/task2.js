class Validator {

    constructor(string) {
        this.string = string
    }

    isEmail() {

        if (typeof this.string !== 'string') {
            return 'Invalid input data'
        }

        const reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

        if (this.string.match(reg)) {
            return true
        }
        return false;
    }

    isDomain() {

        if (typeof this.string !== 'string') {
            return 'Invalid input data'
        }

        const reg = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

        if (this.string.match(reg)) {
            return true
        }
        return false
    }

    isDate() {

        if (typeof this.string !== 'string') {
            return 'Invalid input data'
        }

        const reg = /^(0?[1-9]|[12][0-9]|3[01])[.\-](0?[1-9]|1[012])[.\-]\d{4}$/

        if (this.string.match(reg)) {
            return true
        }
        return false
    }

    isPhone() {
        if (typeof this.string !== 'string') {
            return 'Invalid input data'
        }

        const reg = /^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/

        if (this.string.match(reg)) {
            return true
        }
        return false
    }

}

let test = new Validator('+380 (99)-278-87-08')

console.log(test.isPhone())

module.exports = {Validator}