class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        return [int(char) for each_num in nums for char in str(each_num)]
