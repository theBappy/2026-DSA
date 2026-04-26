var containsCycle = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const parent = new Array(m * n);
    const rank = new Array(m * n).fill(0);

    // Initialize parent array
    for (let i = 0; i < m * n; i++) parent[i] = i;

    const find = (i) => {
        if (parent[i] === i) return i;
        parent[i] = find(parent[i]); // path compression
        return parent[i];
    };

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const directions = [[r, c + 1], [r + 1, c]];

            for (const [nr, nc] of directions) {
                if (nr < m && nc < n && grid[r][c] === grid[nr][nc]) {
                    const u = r * n + c;
                    const v = nr * n + nc;

                    const rootU = find(u);
                    const rootV = find(v);

                    if (rootU === rootV) return true;

                    // Union by rank
                    if (rank[rootU] > rank[rootV]) {
                        parent[rootV] = rootU;
                    } else if (rank[rootU] < rank[rootV]) {
                        parent[rootU] = rootV;
                    } else {
                        parent[rootU] = rootV;
                        rank[rootV]++;
                    }
                }
            }
        }
    }
    return false;
};