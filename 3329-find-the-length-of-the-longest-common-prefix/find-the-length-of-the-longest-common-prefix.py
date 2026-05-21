
import math
class Solution:
    def longestCommonPrefix(self, arr1: List[int], arr2: List[int]) -> int:
        st = set()
        for val in arr1:
            while val not in st and val > 0:
                st.add(val)
                val //= 10

        res = 0
        for num in  arr2:
            while num not in st and num > 0:
                num //= 10
            if num > 0:
                res = max(res, int(math.log10(num) + 1))
        return res
        