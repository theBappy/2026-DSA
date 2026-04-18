class Solution:
    def reverse(self, n: int) -> int:
        # 1. Store the sign and work with the absolute value
        sign = -1 if n < 0 else 1
        n = abs(n)
        
        rev = 0
        while n > 0:
            rev = rev * 10 + n % 10
            n //= 10
            
        return rev * sign

    def mirrorDistance(self, n: int) -> int:
        # Now this works for -123, 100, or any integer!
        return abs(n - self.reverse(n))