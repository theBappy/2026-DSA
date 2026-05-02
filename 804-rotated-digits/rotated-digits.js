/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
    const memo = new Uint8Array(n + 1)
    let count = 0

    for (let i = 1; i <= n; i++) {
        const remainingPart = memo[Math.floor(i / 10)]
        const digit = i % 10
        if (remainingPart === 2 || digit === 3 || digit === 4 || digit === 7) {
            memo[i] = 2
        } else if (remainingPart === 1 || digit === 2 || digit === 5 || digit === 6 || digit === 9) {
            memo[i] = 1
            count++
        } else {
            memo[i] = 0
        }
    }
    return count
};