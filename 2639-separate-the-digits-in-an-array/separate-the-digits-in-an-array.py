class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        res_arr = []
        for i in range(len(nums) - 1, -1, -1):
            n = nums[i]
            while n:
                res_arr.append(n % 10)
                n //= 10
        res_arr.reverse()
        return res_arr
