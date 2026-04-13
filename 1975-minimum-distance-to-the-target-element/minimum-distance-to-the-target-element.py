class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        n = len(nums)
        result = float("inf")
        for i in range(n):
            if result <= abs(i - start):
                break
            if nums[i] == target:
                result = min(result, abs(i - start))
        return result
