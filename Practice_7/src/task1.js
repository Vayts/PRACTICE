class MyString {

    reverse(str) {
        if (typeof str !== 'string') {
            return 'Invalid input data'
        }
        return str.split('').reverse().join('')
    }

    ucFirst(str) {
        if (typeof str !== 'string') {
            return 'Invalid input data'
        }
        return str[0].toUpperCase() + str.slice(1)

    }

    ucWords(str) {
        if (typeof str !== 'string') {
            return 'Invalid input data'
        }

        let result = []
        let arr = str.split(' ')
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i][0].toUpperCase() + arr[i].slice(1))
        }
        return result.join(' ')
    }
}

module.exports = {MyString}

