var numberOfSpecialChars = function (word) {
    let lower = 0
    let upper = 0
    for (const ch of word) {
        if (ch >= 'a' && ch <= 'z') {
            lower |= (1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0)))
        } else {
            upper |= (1 << (ch.charCodeAt(0) - 'A'.charCodeAt(0)))
        }
    }

    let count = 0
    let bits = lower & upper
    while (bits !== 0) {
        count += bits & 1
        bits >>= 1
    }
    return count
};