/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
    const n = mat.length;

    // Helper: Rotates the matrix 90 degrees clockwise in-place
    const rotate = (matrix) => {
        // 1. Transpose
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
        // 2. Reverse each row
        for (let i = 0; i < n; i++) {
            matrix[i].reverse();
        }
    };

    // Helper: Checks for equality
    const areEqual = (m1, m2) => {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (m1[i][j] !== m2[i][j]) return false;
            }
        }
        return true;
    };

    // Check all 4 possible rotations (0, 90, 180, 270)
    for (let c = 0; c < 4; c++) {
        if (areEqual(mat, target)) return true;
        rotate(mat);
    }

    return false;
};