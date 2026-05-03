var rotateString = function (s, goal) {
    const m = s.length
    const n = goal.length
    if (m !== n) return false;
    let arr = s.split('')
    for (let rotationCount = 1; rotationCount <= m; rotationCount++) {
        const firstChar = arr.shift()
        arr.push(firstChar)
        if (arr.join('') === goal) return true
    }
    return false
};