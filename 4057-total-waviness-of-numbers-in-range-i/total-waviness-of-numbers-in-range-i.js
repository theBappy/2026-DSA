var totalWaviness = function (num1, num2) {
    const getWaviness = x => {
        const s = x.toString()
        let waviness = 0
        for (let i = 1; i < s.length - 1; i++) {
            const isPeak = s[i] > s[i - 1] && s[i] > s[i + 1]
            const isValley = s[i] < s[i - 1] && s[i] < s[i + 1]
            if (isPeak || isValley) {
                waviness++
            }
        }
        return waviness
    }
    let total = 0
    for (let i = num1; i <= num2; i++) {
        total += getWaviness(i)
    }
    return total
};