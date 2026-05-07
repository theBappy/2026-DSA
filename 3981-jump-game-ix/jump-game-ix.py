class Solution:
    def maxValue(self, nums: List[int]) -> List[int]:
        n = len(nums)

        greaterInLeft = [0] * n  # greaterInLeft[i] = max element from index 0 to i
        smallerInRight = [0] * n  # smallerInRight[i] = min element from i+1 to n

        greaterInLeft[0] = nums[0]
        smallerInRight[n - 1] = nums[n - 1]

        for i in range(1, n):
            greaterInLeft[i] = max(nums[i], greaterInLeft[i - 1])

        for i in range(n - 2, -1, -1):
            smallerInRight[i] = min(nums[i], smallerInRight[i + 1])

        ans = [0] * n
        ans[n - 1] = greaterInLeft[n - 1]

        for i in range(n - 2, -1, -1):
            if greaterInLeft[i] <= smallerInRight[i + 1]:  # can't go to right
                ans[i] = greaterInLeft[i]
            else:  # greaterInLeft[i] > smallerInRight[i]
                ans[i] = ans[i + 1]

        return ans
