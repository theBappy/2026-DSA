/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
    const n = positions.length
    const indices = Array.from({ length: n }, (_, i) => i)
    const st = []
    indices.sort((i, j) => positions[i] - positions[j])
    const result = []
    for (const currentIndex of indices) {
        if (directions[currentIndex] === "R") {
            st.push(currentIndex)
        } else {
            while (st.length > 0 && healths[currentIndex] > 0) {
                const topIndex = st.pop()
                if (healths[topIndex] > healths[currentIndex]) {
                    healths[topIndex] -= 1
                    healths[currentIndex] = 0
                    st.push(topIndex)
                } else if (healths[topIndex] < healths[currentIndex]) {
                    healths[currentIndex] -= 1
                    healths[topIndex] = 0
                } else {
                    healths[currentIndex] = 0
                    healths[topIndex] = 0
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (healths[i] > 0) {
            result.push(healths[i])
        }
    }
    return result
};