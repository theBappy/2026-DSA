var rotateTheBox = function (box) {
    const m = box.length
    const n = box[0].length
    const result = Array.from({ length: n }, () => Array(m))

    //transpose
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            result[i][j] = box[j][i]
        }
    }

    //reverse
    for (const row of result) {
        row.reverse()
    }

    //apply gravity
    for (let j = 0; j < m; j++) {
        let spaceBottomRow = n - 1
        for (let i = n - 1; i >= 0; i--) {
            if (result[i][j] === '*') {
                spaceBottomRow = i - 1
            } else if (result[i][j] === '#') {
                result[i][j] = '.'
                result[spaceBottomRow][j] = '#'
                spaceBottomRow--
            }
        }
    }
    return result
};