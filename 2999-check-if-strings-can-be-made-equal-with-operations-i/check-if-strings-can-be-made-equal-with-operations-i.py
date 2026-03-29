class Solution:
    def canBeEqual(self, s1: str, s2: str) -> bool:
        even = [0] * 26
        odd = [0] * 26

        for i in range(4):
            if i % 2 == 0:
                even[ord(s1[i]) - ord('a')] += 1
                even[ord(s2[i]) - ord('a')] -= 1
            else:
                odd[ord(s1[i]) - ord('a')] += 1
                odd[ord(s2[i]) - ord('a')] -= 1

        for i in range(26):
            if even[i] != 0 or odd[i] != 0:
                return False
        return True