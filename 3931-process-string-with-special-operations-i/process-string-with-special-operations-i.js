var processStr = function (s) {
    const result = []
    for (const char of s) {
        if (char >= 'a' && char <= 'z') {
            result.push(char)
        } else if (char === '*') {
            if (result.length) {
                result.pop()
            }
        } else if (char === '#') {
            result.push(...result)
        } else if (char === '%') {
            result.reverse()
        }
    }
    return result.join("")
};