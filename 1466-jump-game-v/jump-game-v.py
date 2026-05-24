class Solution:
    def maxJumps(self, arr: List[int], d: int) -> int:
        n = len(arr)
        dp = [1] * n

        sorted_elements = sorted([(val, i) for i, val in enumerate(arr)])

        for val, i in sorted_elements:
            for j in range(i - 1, max(-1, i - d - 1), -1):
                if arr[j] >= arr[i]:
                    break
                dp[i] = max(dp[i], 1 + dp[j])

            for j in range(i + 1, min(n, i + d + 1)):
                if arr[j] >= arr[i]:
                    break
                dp[i] = max(dp[i], 1 + dp[j])
        return max(dp)
