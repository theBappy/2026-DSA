var rotateString = function (s, goal) {
    const n = s.length
    if (n !== goal.length) return false

    for (let i = 0; i < n; i++) {
        let match = true
        for (let j = 0; j < n; j++) {
            // check if characters match with a wrap-around index
            if (s[(i + j) % n] !== goal[j]) {
                match = false
                break
            }
        }
        if (match) return true
    }
    return false
};