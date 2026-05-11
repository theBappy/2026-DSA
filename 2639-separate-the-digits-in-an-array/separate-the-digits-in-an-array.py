class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        res_arr = []
        for n in reversed(nums):
            while n:
                res_arr.append(n % 10)
                n //= 10
        return list(reversed(res_arr))