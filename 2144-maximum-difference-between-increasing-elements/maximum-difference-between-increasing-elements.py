class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        n = len(nums)
        ans = -1
        min_element = nums[0]

        for i in range(1, n):
            if nums[i] > min_element:
                ans = max(ans, nums[i] - min_element)
            else:
                min_element = nums[i]
        return ans
