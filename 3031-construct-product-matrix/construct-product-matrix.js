/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function (grid) {
    const MOD = 12345;
    const n = grid.length;
    const m = grid[0].length;
    const p = Array.from({ length: n }, () => Array(m).fill(0));

    let suffix = 1n;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            p[i][j] = Number(suffix);
            suffix = (suffix * BigInt(grid[i][j])) % BigInt(MOD);
        }
    }

    let prefix = 1n;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            p[i][j] = Number((prefix * BigInt(p[i][j])) % BigInt(MOD));
            prefix = (prefix * BigInt(grid[i][j])) % BigInt(MOD);
        }
    }
    return p;
};