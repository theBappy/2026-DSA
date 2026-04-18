class Solution:
    def reverse(self, n: int) -> int:
        rev = 0
        while n > 0:
            rev = rev * 10 + n % 10
            n //= 10
        return rev

    def mirrorDistance(self, n: int) -> int:
        return abs(n - self.reverse(n))
