class Solution:
    def containsCycle(self, grid: List[List[str]]) -> bool:
        if not grid or not grid[0]:
            return False
        m, n = len(grid), len(grid[0])
        visited = [[False for _ in range(n)] for _ in range(m)]
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        def dfs(r, c, prev_r, prev_c):
            visited[r][c] = True

            for dr, dc in directions:
                nr, nc = r + dr, c + dc

                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == grid[r][c]:
                    # if neighbor is the one we just came from, skip it
                    if nr == prev_r and nc == prev_c:
                        continue
                    # if visited, we found a cycle
                    if visited[nr][nc]:
                        return True

                    # recurse
                    if dfs(nr, nc, r, c):
                        return True
            return False

        for i in range(m):
            for j in range(n):
                if not visited[i][j]:
                    if dfs(i, j, -1, -1):
                        return True
        return False
