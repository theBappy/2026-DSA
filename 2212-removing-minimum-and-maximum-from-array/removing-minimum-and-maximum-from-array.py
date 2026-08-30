class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        minp, maxp, minel, maxel, L = 0, 0, float('inf'), float('-inf'), len(nums)
        for i, n in enumerate(nums):
            if n > maxel:
                maxel = n
                maxp = i
            if n < minel:
                minel = n
                minp = i
        
        left, right = min(minp, maxp), max(minp, maxp)

        return min(right + 1, L - left, left + 1 + (L - right))