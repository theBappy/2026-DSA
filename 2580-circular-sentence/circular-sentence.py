class Solution:
    def isCircularSentence(self, s: str) -> bool:
        for i in range(len(s)):
            if s[i] == " " and s[i - 1] != s[i + 1]:
                return False
        return s[0] == s[-1]
