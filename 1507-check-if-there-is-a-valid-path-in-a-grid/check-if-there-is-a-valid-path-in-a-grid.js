var hasValidPath = function(grid) {
    const m = grid.length, n = grid[0].length;
    const parent = Array.from({ length: m * n }, (_, i) => i);
    const rank = new Array(m * n).fill(0);

    const find = (i) => {
        if (parent[i] === i) return i;
        return parent[i] = find(parent[i]);
    };

    const union = (i, j) => {
        let rootI = find(i), rootJ = find(j);
        if (rootI !== rootJ) {
            if (rank[rootI] < rank[rootJ]) parent[rootI] = rootJ;
            else if (rank[rootI] > rank[rootJ]) parent[rootJ] = rootI;
            else { parent[rootI] = rootJ; rank[rootJ]++; }
        }
    };

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let idx = r * n + c;
            // check right
            if (c + 1 < n && [1, 4, 6].includes(grid[r][c]) && [1, 3, 5].includes(grid[r][c+1]))
                union(idx, idx + 1);
            // check down
            if (r + 1 < m && [2, 3, 4].includes(grid[r][c]) && [2, 5, 6].includes(grid[r+1][c]))
                union(idx, idx + n);
        }
    }
    return find(0) === find(m * n - 1);
};