from collections import Counter

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # count frequencies of elements
        counts = Counter(nums1)
        result = []

        for num in nums2:
            # if the elements is still available in out count pool
            if counts[num] > 0:
                result.append(num)
                counts[num] -= 1  # decrement the count

        return result
