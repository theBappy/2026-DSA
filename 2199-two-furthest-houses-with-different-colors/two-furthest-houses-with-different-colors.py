class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        n = len(colors)
        res = 0

        # distance from the first house(check from left)
        for j in range(n - 1, 0, -1):
            if colors[0] != colors[j]:
                res = max(res, j)
                break

        # distance from the last house(check from right)
        for i in range(n - 1):
            if colors[i] != colors[n - 1]:
                res = max(res, n - 1 - i)
                break

        return res
