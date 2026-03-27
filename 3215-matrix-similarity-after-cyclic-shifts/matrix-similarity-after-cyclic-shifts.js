/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
    const m = mat.length
    const n = mat[0].length
    k = k % n
    if (k === 0) {
        return true
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const currIdx = j
            let finalIdx;
            if (i % 2 === 0) {
                finalIdx = (j + k) % n
            } else {
                finalIdx = (j - k + n) % n
            }
            if (mat[i][currIdx] !== mat[i][finalIdx]) {
                return false
            }
        }
    }
    return true
};