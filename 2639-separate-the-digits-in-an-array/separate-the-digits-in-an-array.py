class Solution(object):
    def separateDigits(self, nums):
        res_arr = []
        for n in nums:
            for digit in str(n):
                res_arr.append(int(digit))
        return res_arr
        