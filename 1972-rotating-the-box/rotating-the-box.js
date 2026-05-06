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
        for (let i = n - 1; i >= 0; i--) {
            if (result[i][j] === '.') { // if it is a space
                let stoneRow = -1;

                for (let k = i - 1; k >= 0; k--) {
                    if (result[k][j] === '*') {
                        break;
                    } else if (result[k][j] === '#') {
                        stoneRow = k;
                        break;
                    }
                }

                if (stoneRow !== -1) {
                    result[i][j] = '#';
                    result[stoneRow][j] = '.';
                }
            }
        }
    }
    return result
};