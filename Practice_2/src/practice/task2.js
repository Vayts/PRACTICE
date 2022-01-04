function breakCycle() {
    let result;
    outer: for (let i = 0; i < 20; i++) { //! Эту строку можно изменить
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15) {
                result = `${i} ${j}`
                break outer //! Эту строку можно изменить
            }
            console.log(i, j);
        }
    }
    return result;
}

console.log(breakCycle())

module.exports = breakCycle;