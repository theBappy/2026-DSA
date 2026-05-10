class Solution:
    def maximumJumps(self, nums: List[int], target: int) -> int:
        n = len(nums)
        t = [float('-inf')]*(n+1)
        t[n-1]=0

        for i in range(n-2, -1, -1):
            for j in range(i+1, n):
                if abs(nums[j] - nums[i]) <= target and t[j] != float('-inf'):
                    temp = 1 + t[j]
                    t[i] = max(t[i], temp)

        return -1 if t[0] < 0 else t[0]