from collections import defaultdict

class Solution:
    def minimumHammingDistance(self, source: list[int], target: list[int], allowedSwaps: list[list[int]]) -> int:
        n = len(source)
        parent = list(range(n))
        rank = [0] * n

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return
            if rank[px] > rank[py]:
                parent[py] = px
            elif rank[px] < rank[py]:
                parent[px] = py
            else:
                parent[px] = py
                rank[py] += 1

        # 1. Build the connected components
        for u, v in allowedSwaps:
            union(u, v)

        # 2. Group source values by their component root
        # root -> { value: count }
        inventories = defaultdict(lambda: defaultdict(int))
        for i in range(n):
            root = find(i)
            inventories[root][source[i]] += 1

        hamming_distance = 0

        # 3. Check if target[i] can be satisfied by its component's inventory
        for i in range(n):
            root = find(i)
            target_val = target[i]
            
            if inventories[root][target_val] > 0:
                inventories[root][target_val] -= 1
            else:
                hamming_distance += 1

        return hamming_distance