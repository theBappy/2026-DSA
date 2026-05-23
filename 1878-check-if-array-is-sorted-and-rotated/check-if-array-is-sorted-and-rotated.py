class Solution:
    def check(self, nums: List[int]) -> bool:
        n = len(nums)
        peak = 0

        for i in range(n):
            # (i + 1) % n seamlessly wraps the last element back to the first element
            if nums[i] > nums[(i + 1) % n]:
                peak += 1

        # A valid sorted and rotated array can have at most 1 drop/peak
        return peak <= 1
