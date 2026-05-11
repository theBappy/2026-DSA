class Solution:
    def countEven(self, num: int) -> int:
        # Calculate digit sum of the boundary 'num'
        digit_sum = sum(int(d) for d in str(num))
        
        # If the boundary's digit sum is even, it 'completes' a pair
        if digit_sum % 2 == 0:
            return num // 2
        else:
            return (num - 1) // 2