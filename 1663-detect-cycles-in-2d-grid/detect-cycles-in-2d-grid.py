class Solution:
    def containsCycle(self, grid: list[list[str]]) -> bool:
        m, n = len(grid), len(grid[0])
        parent = list(range(m * n))
        rank = [0] * (m * n)

        def find(i):
            if parent[i] == i:
                return i
            parent[i] = find(parent[i]) # path compression
            return parent[i]

        for r in range(m):
            for c in range(n):
                # we only look right and down to process each potential edge once
                for nr, nc in [(r, c + 1), (r + 1, c)]:
                    if nr < m and nc < n and grid[r][c] == grid[nr][nc]:
                        u = r * n + c
                        v = nr * n + nc
                        
                        root_u = find(u)
                        root_v = find(v)

                        if root_u == root_v:
                            return True  # cycle detected: u and v already connected
                        
                        # union by rank
                        if rank[root_u] > rank[root_v]:
                            parent[root_v] = root_u
                        elif rank[root_u] < rank[root_v]:
                            parent[root_u] = root_v
                        else:
                            parent[root_u] = root_v
                            rank[root_v] += 1
                            
        return False