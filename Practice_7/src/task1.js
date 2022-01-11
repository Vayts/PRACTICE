class MyString {
    constructor(string) {
        this.string = string;
    }

    reverse() {
        if (typeof this.string !== 'string') {
            return 'Invalid input data'
        }
        return this.string.split('').reverse().join('')
    }

    ucFirst() {
        if (typeof this.string !== 'string') {
            return 'Invalid input data'
        }
        return this.string[0].toUpperCase() + this.string.slice(1)

    }

    ucWords() {
        if (typeof this.string !== 'string') {
            return 'Invalid input data'
        }

        let result = []
        let arr = this.string.split(' ')
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i][0].toUpperCase() + arr[i].slice(1))
        }
        return result.join(' ')
    }
}

module.exports = {MyString}

