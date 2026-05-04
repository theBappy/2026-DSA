var rotate = function (matrix) {
    const n = matrix.length

    // transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    // reverse
    for (let i = 0; i < n; i++) {
        matrix[i].reverse()
    }
};