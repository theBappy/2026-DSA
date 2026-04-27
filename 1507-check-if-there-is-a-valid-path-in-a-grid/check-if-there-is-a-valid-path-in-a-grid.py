class Solution:
    def hasValidPath(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])

        parent = list(range(m * n))
        rank = [0] * (m * n)  # Initialize ranks to zero

        def find(i):
            # Path compression: makes every node point to the root
            if parent[i] != i:
                parent[i] = find(parent[i])
            return parent[i]

        def union(i, j):
            root_i, root_j = find(i), find(j)
            if root_i != root_j:
                # Union by Rank: attach the smaller tree under the larger tree
                if rank[root_i] > rank[root_j]:
                    parent[root_j] = root_i
                elif rank[root_i] < rank[root_j]:
                    parent[root_i] = root_j
                else:
                    parent[root_j] = root_i
                    rank[root_i] += 1

        for r in range(m):
            for c in range(n):
                curr_idx = r * n + c
                curr_type = grid[r][c]

                # Check Right Connection
                if c + 1 < n:
                    if curr_type in {1, 4, 6} and grid[r][c + 1] in {1, 3, 5}:
                        union(curr_idx, curr_idx + 1)

                # Check Down Connection
                if r + 1 < m:
                    if curr_type in {2, 3, 4} and grid[r + 1][c] in {2, 5, 6}:
                        union(curr_idx, curr_idx + n)

        return find(0) == find(m * n - 1)
