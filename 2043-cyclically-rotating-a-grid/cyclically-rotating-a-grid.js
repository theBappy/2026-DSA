var rotateGrid = function (grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const layers = Math.floor(Math.min(m, n) / 2);

    for (let layer = 0; layer < layers; layer++) {
        const nums = [];

        const top = layer;
        const bottom = m - layer - 1;
        const left = layer;
        const right = n - layer - 1;

        // Top row (left -> right)
        for (let j = left; j <= right; j++) {
            nums.push(grid[top][j]);
        }

        // Right column (top -> bottom)
        for (let i = top + 1; i <= bottom - 1; i++) {
            nums.push(grid[i][right]);
        }

        // Bottom row (right -> left)
        for (let j = right; j >= left; j--) {
            nums.push(grid[bottom][j]);
        }

        // Left column (bottom -> top)
        for (let i = bottom - 1; i >= top + 1; i--) {
            nums.push(grid[i][left]);
        }

        const len = nums.length;
        const normalized_k = k % len;

        // Rotate array to the left by normalized_k
        const rotated = nums.slice(normalized_k).concat(nums.slice(0, normalized_k));

        let idx = 0;

        for (let j = left; j <= right; j++) {
            grid[top][j] = rotated[idx++];
        }

        for (let i = top + 1; i <= bottom - 1; i++) {
            grid[i][right] = rotated[idx++];
        }

        for (let j = right; j >= left; j--) {
            grid[bottom][j] = rotated[idx++];
        }

        for (let i = bottom - 1; i >= top + 1; i--) {
            grid[i][left] = rotated[idx++];
        }
    }

    return grid;
};