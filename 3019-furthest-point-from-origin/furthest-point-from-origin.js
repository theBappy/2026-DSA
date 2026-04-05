/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
    let leftCount = 0
    let rightCount = 0
    let spacesCount = 0
    for (const ch of moves) {
        if (ch === 'L') leftCount++
        if (ch === 'R') rightCount++
        if (ch === '_') spacesCount++
    }
    return Math.abs(leftCount - rightCount) + spacesCount
};