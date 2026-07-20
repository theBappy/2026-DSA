const shiftGrid = (grid, k) => {
    const r = grid.length, c = grid[0].length;
    const n = r * c;
    k = k % n;

    if (!k) return grid;

    const shift = (i, j) => {
        while (i < j) {
            [grid[(i / c) | 0][i % c], grid[(j / c) | 0][j % c]] = [grid[(j / c) | 0][j % c], grid[(i / c) | 0][i % c]];
            i++;
            j--;
        }
    };

    shift(0, n - 1);
    shift(0, k - 1);
    shift(k, n - 1);
    return grid;
};