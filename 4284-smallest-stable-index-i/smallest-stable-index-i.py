class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        n = len(nums)
        suf = [0] * n
        suf[-1] = nums[-1]

        for i in range(n - 2, -1, -1):
            suf[i] = min(suf[i + 1], nums[i])

        mx = 0
        for i, x in enumerate(nums):
            mx = max(mx, x)
            if mx - suf[i] <= k:
                return i

        return -1