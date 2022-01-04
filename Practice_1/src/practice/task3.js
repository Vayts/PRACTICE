function doSum(str, num) {

    if (typeof str !== 'string') {
        return 'Invalid input data'
    }

    if (!str) {
        return 'Invalid input data'
    }

    if (isNaN(+str)) {
        return 'Invalid input data'
    }

    if (typeof num !== 'number') {
        return 'Invalid input data'
    }



    let number = num;

    if (number % 3 === 0 && number % 5 === 0 && number % 15 === 0) {
        number = number * -1
    }

    return Number(str) + number
}

console.log(doSum('фф',12))

module.exports = doSum;