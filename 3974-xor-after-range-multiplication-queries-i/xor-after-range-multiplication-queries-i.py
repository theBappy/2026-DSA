class Solution:
    def xorAfterQueries(self, nums: List[int], queries: List[List[int]]) -> int:
        M = int(1e9 + 7)

        for query in queries:
            l, r, k, v = query
            while l <= r:
                nums[l] = (nums[l] * v) % M
                l += k

        result = 0
        for num in nums:
            result ^= num

        return result
