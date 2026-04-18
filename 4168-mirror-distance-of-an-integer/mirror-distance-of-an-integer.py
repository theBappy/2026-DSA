class Solution:
    def mirrorDistance(self, n: int) -> int:
        s = str(n)
        rev = int(s[::-1])
        return abs(n - rev)
