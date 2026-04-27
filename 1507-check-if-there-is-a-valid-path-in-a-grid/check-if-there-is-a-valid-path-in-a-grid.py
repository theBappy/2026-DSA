from collections import deque


class Solution:
    def hasValidPath(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])

        dirs = {
            1: [(0, -1), (0, 1)],
            2: [(-1, 0), (1, 0)],
            3: [(0, -1), (1, 0)],
            4: [(0, 1), (1, 0)],
            5: [(0, -1), (-1, 0)],
            6: [(0, 1), (-1, 0)],
        }

        que = deque([(0, 0)])
        visited = set([(0, 0)])

        while que:
            r, c = que.popleft()

            if (r, c) == (m - 1, n - 1):
                return True

            for dx, dy in dirs[grid[r][c]]:
                nr, nc = r + dx, c + dy

                if 0 <= nr < m and 0 <= nc < n and (nr, nc) not in visited:
                    # check reverse connection
                    for x, y in dirs[grid[nr][nc]]:
                        if nr + x == r and nc + y == c:
                            visited.add((nr, nc))
                            que.append((nr, nc))
                            break
        return False
