function containsCycle(grid) {
    if (!grid || grid.length === 0) return false;

    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];

    function dfs(r, c, prevR, prevC) {
        visited[r][c] = true;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === grid[r][c]) {
                if (nr === prevR && nc === prevC) continue;

                if (visited[nr][nc]) return true;

                if (dfs(nr, nc, r, c)) return true;
            }
        }
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1)) return true;
            }
        }
    }
    return false;
}