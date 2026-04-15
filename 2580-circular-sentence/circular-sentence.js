var isCircularSentence = function (sentence) {
    if (sentence[0] !== sentence[sentence.length - 1]) {
        return false
    }
    for (let i = 1; i < sentence.length - 1; i++) {
        if (sentence[i] === " ") {
            if (sentence[i - 1] !== sentence[i + 1]) {
                return false
            }
        }
    }
    return true
};