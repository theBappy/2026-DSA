class Solution:
    def hasValidPath(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        parent = list(range(m * n))
        rank = [0] * (m * n)

        def find(i):
            if parent[i] != i:
                parent[i] = find(parent[i])
            return parent[i]

        def union(i, j):
            root_i, root_j = find(i), find(j)
            if root_i != root_j:
                if rank[root_i] < rank[root_j]:
                    parent[root_i] = root_j
                elif rank[root_i] > rank[root_j]:
                    parent[root_j] = root_i
                else:
                    parent[root_i] = root_j
                    rank[root_j] += 1

        for r in range(m):
            for c in range(n):
                idx = r * n + c
                # check right
                if (
                    c + 1 < n
                    and grid[r][c] in {1, 4, 6}
                    and grid[r][c + 1] in {1, 3, 5}
                ):
                    union(idx, idx + 1)
                # check down
                if (
                    r + 1 < m
                    and grid[r][c] in {2, 3, 4}
                    and grid[r + 1][c] in {2, 5, 6}
                ):
                    union(idx, idx + n)
        return find(0) == find(m * n - 1)
