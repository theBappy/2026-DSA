class Solution:
    def minElement(self, nums: List[int]) -> int:
        ans = float("inf")
        for num in nums:
            dig = 0
            while num:
                dig += num % 10
                num //= 10
            ans = min(ans, dig)
        return ans
