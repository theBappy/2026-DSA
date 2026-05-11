var alternateDigitSum = function (n) {
    const s = n.toString()
    let res = 0
    for (let i = 0; i < s.length; i++) {
        const digit = parseInt(s[i])
        res += (i % 2 === 0) ? digit : -digit
    }
    return res
};