
var closestTarget = function (words, target, startIndex) {
    const n = words.length
    let result = Infinity
    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            const clockwise_dist = Math.abs(i - startIndex)
            const anti_clockwise_dist = n - clockwise_dist

            result = Math.min(result, clockwise_dist, anti_clockwise_dist)
        }
    }
    return result === Infinity ? -1 : result
};