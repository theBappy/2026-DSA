class Solution:
    def maxJumps(self, arr: list[int], d: int) -> int:
        n = len(arr)
        # dp[i] will store the maximum jumps starting from index i
        dp = [1] * n
        
        # pair each value with its index and sort by value ascending
        # this ensures we process smaller heights first
        sorted_elements = sorted([(val, i) for i, val in enumerate(arr)])
        
        for val, i in sorted_elements:
            # move Left: check up to d steps back
            for j in range(i - 1, max(-1, i - d - 1), -1):
                # break: can't jump over or onto a taller/equal building
                if arr[j] >= arr[i]:
                    break
                dp[i] = max(dp[i], 1 + dp[j])
                
            # move Right: check up to d steps forward
            for j in range(i + 1, min(n, i + d + 1)):
                # break: can't jump over or onto a taller/equal building
                if arr[j] >= arr[i]:
                    break
                dp[i] = max(dp[i], 1 + dp[j])
                
        # the answer is the maximum value found in our DP array
        return max(dp)