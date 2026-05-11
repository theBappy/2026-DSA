class Solution:
    def alternateDigitSum(self, n: int) -> int:
        s = str(n)
        res = 0
        for i in range(len(s)):
            if i % 2 == 0:
                res += int(s[i])
            else:
                res -= int(s[i])
        return res
