var minOperations = function (grid, x) {
    const m = grid.length;
    const n = grid[0].length;

    const vec = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            vec.push(grid[i][j]);
        }
    }
    const vec_length = vec.length;

    vec.sort((a, b) => a - b);

    const target = vec[Math.floor(vec_length / 2)];
    let result = 0;
    for (const num of vec) {
        if (num % x !== target % x)
            return -1;
        result += Math.abs(target - num) / x;
    }
    return result;
};