var maxPathScore = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    
    // Initialize 3D array
    const t = Array.from({ length: m }, () => 
        Array.from({ length: n }, () => Array(k + 1).fill(-1))
    );

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const isPos = grid[i][j] > 0 ? 1 : 0;
            for (let cost = k; cost >= 0; cost--) {
                const newCost = cost + isPos;

                if (newCost > k) continue;

                if (i === m - 1 && j === n - 1) {
                    t[i][j][cost] = grid[i][j];
                } else {
                    const down = i + 1 < m ? t[i + 1][j][newCost] : -1;
                    const right = j + 1 < n ? t[i][j + 1][newCost] : -1;
                    const bestNext = Math.max(down, right);

                    if (bestNext !== -1) {
                        t[i][j][cost] = grid[i][j] + bestNext;
                    }
                }
            }
        }
    }

    return t[0][0][0];
};