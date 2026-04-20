class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        n = len(colors)
        res = 0
        for i in range(n):
            # i in any index compare with left most(0'th house)
            if colors[i] != colors[0]:
                res = max(res, i)
            # i in any index compare with right most(n-1'th house)
            if colors[i] != colors[n - 1]:
                res = max(res, abs(i - (n - 1)))
        return res
