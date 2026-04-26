from collections import deque


class Solution:
    def containsCycle(self, grid: List[List[str]]) -> bool:
        if not grid or not grid[0]:
            return False
        m, n = len(grid), len(grid[0])
        visited = [[False for _ in range(n)] for _ in range(m)]
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        def bfs(start_r, start_c):
                # queue stores: (curr_r, curr_c, prev_r, prev_c)
                queue = deque([(start_r, start_c, -1, -1)])
                visited[start_r][start_c] = True

                while queue:
                    r, c, prev_r, prev_c = queue.popleft()

                    for dr, dc in directions:
                        nr, nc = r + dr, c + dc

                        # Check boundaries and if the character matches
                        if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == grid[start_r][start_c]:
                            # If this neighbor is where we just came from, ignore it
                            if nr == prev_r and nc == prev_c:
                                continue
                            
                            # If we encounter a visited node that isn't the parent, a cycle exists
                            if visited[nr][nc]:
                                return True
                            
                            visited[nr][nc] = True
                            queue.append((nr, nc, r, c))
                
                return False

        for i in range(m):
            for j in range(n):
                if not visited[i][j]:
                    if bfs(i, j):
                        return True
        return False
