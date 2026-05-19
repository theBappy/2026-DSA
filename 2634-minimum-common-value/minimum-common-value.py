class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        set1 = set(nums1)
        set2 = set(nums2)
        common = set1.intersection(set2)

        if common:
            return min(common)
        else:
            return -1
