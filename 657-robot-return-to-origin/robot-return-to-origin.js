/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0
    let y = 0
    //T.C = O(n)
    //S.C = O(1)
    for (const ch of moves) {
        if (ch === 'U') y++
        else if (ch === 'D') y--
        else if (ch === 'L') x--
        else if (ch === 'R') x++
    }
    return x === 0 && y === 0
};