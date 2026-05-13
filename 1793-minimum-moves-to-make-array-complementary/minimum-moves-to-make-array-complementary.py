from itertools import accumulate

class Solution:
    def minMoves(self, nums: List[int], limit: int) -> int:
        n = len(nums)
        line = [0] * (2 * limit + 2)

        for i in range(n // 2):
            a, b = nums[i], nums[n - 1 - i]
            if a > b:
                a, b = b, a

            line[2] += 2
            line[a + 1] -= 1
            line[a + b] -= 1
            line[a + b + 1] += 1
            line[b + limit + 1] += 1

        return min(accumulate(line[2 : 2 * limit + 1]))
