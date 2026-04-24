
var furthestDistanceFromOrigin = function (moves) {
    let leftMove = 0
    let rightMove = 0
    let spacedMove = 0
    for (const move of moves) {
        if (move === 'L') leftMove++
        if (move === 'R') rightMove++
        if (move === '_') spacedMove++
    }
    return Math.abs(leftMove - rightMove) + spacedMove
};