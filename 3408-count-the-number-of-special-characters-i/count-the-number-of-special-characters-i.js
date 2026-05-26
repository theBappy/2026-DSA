var numberOfSpecialChars = function (word) {
    let st = new Set(word)
    let count = 0

    for (let ch of st) {
        if (ch >= 'A' && ch <= 'Z' && st.has(ch.toLowerCase())) {
            count++
        }
    }
    return count
};