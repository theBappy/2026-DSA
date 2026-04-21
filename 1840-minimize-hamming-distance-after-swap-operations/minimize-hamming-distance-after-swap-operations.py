from collections import defaultdict, Counter


class Solution:
    def minimumHammingDistance(
        self, source: List[int], target: List[int], allowedSwaps: List[List[int]]
    ) -> int:
        n = len(source)
        parent = list(range(n))
        rank = [0] * n

        def find(i):
            if parent[i] == i:
                return i
            parent[i] = find(parent[i])
            return parent[i]

        def union(x, y):
            root_x = find(x)
            root_y = find(y)

            if root_x != root_y:
                if rank[root_x] < rank[root_y]:
                    parent[root_x] = root_y
                elif rank[root_x] > rank[root_y]:
                    parent[root_y] = root_x
                else:
                    parent[root_x] = root_y
                    rank[root_y] += 1

        # Build connected components using Union by Rank
        for u, v in allowedSwaps:
            union(u, v)

        components = defaultdict(Counter)
        for i in range(n):
            components[find(i)][source[i]] += 1

        hamming_dist = 0
        for i in range(n):
            root = find(i)
            if components[root][target[i]] > 0:
                components[root][target[i]] -= 1
            else:
                hamming_dist += 1

        return hamming_dist
