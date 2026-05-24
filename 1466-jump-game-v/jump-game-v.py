from functools import lru_cache

class Solution:
    def maxJumps(self, arr: list[int], d: int) -> int:
        n = len(arr)
        
        # @lru_cache handles the memoization table automatically
        @lru_cache(None)
        def dfs(i: int) -> int:
            max_child_jumps = 0
            
            # look Left
            for j in range(i - 1, max(-1, i - d - 1), -1):
                if arr[j] >= arr[i]:  # blocked by a taller/equal building
                    break
                max_child_jumps = max(max_child_jumps, dfs(j))
                
            # look Right
            for j in range(i + 1, min(n, i + d + 1)):
                if arr[j] >= arr[i]:  # blocked by a taller/equal building
                    break
                max_child_jumps = max(max_child_jumps, dfs(j))
                
            # total jumps from here is 1 (current building) + best path from children
            return 1 + max_child_jumps

        # try starting from every possible index and find the maximum
        return max(dfs(i) for i in range(n))