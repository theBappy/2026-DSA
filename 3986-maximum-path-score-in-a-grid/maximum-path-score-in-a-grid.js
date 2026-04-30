var maxPathScore = function (grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const t = Array.from({ length: m }, () =>
        Array.from({ length: n }, () =>
            Array(k + 1).fill(-1)
        )
    );

    const dpOnGrid = (i, j, currentCost) => {
        // Bounds check
        if (i >= m || j >= n) return Number.MIN_SAFE_INTEGER;

        // Update cost based on current cell
        let newCost = currentCost + (grid[i][j] > 0 ? 1 : 0);
        
        // If we exceed k, this path is invalid
        if (newCost > k) return Number.MIN_SAFE_INTEGER;

        // Check memo with the UPDATED cost
        if (t[i][j][newCost] !== -1) return t[i][j][newCost];

        // Base case: Reach the bottom-right
        if (i === m - 1 && j === n - 1) return grid[i][j];

        let down = dpOnGrid(i + 1, j, newCost);
        let right = dpOnGrid(i, j + 1, newCost);

        let bestNext = Math.max(down, right);
        
        // If both paths lead to dead ends
        if (bestNext === Number.MIN_SAFE_INTEGER) {
            return t[i][j][newCost] = Number.MIN_SAFE_INTEGER;
        }

        return t[i][j][newCost] = grid[i][j] + bestNext;
    };

    const result = dpOnGrid(0, 0, 0);
    return result <= Number.MIN_SAFE_INTEGER ? -1 : result;
};