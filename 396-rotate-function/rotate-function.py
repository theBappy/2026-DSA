class Solution:
    def maxRotateFunction(self, nums: List[int]) -> int:
        n = len(nums)
        total_sum = sum(nums)

        # calculate initital F(0)
        current_f = sum(i * val for i, val in enumerate(nums))
        max_f = current_f

        # calculate F(1) to F(n-1) using the transition formula
        # we go backwards through the array for the elements hitting the 0-multiplier
        for k in range(1, n):
            current_f = current_f + total_sum - n * nums[n - k]
            if current_f > max_f:
                max_f = current_f

        return max_f
