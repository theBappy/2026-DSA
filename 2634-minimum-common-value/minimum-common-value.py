class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        def binary_search(target, nums):
            left = 0
            right = len(nums) - 1

            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] == target:
                    return True
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1

            return False

        for num in nums1:
            if binary_search(num, nums2):
                return num

        return -1
