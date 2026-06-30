class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        res = 0
        p = [-1, -1, -1]
        for i, ch in enumerate(s):
            p[(ord(ch) & 31) - 1] = i
            res += min(p) + 1
        return res
