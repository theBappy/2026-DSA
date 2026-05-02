class Solution:
    def rotatedDigits(self, n: int) -> int:
        # memo_arr stores the status of each number:
        # 0: Same (only contains 0, 1, 8)
        # 1: Good (contains at least one 2, 5, 6, 9 AND no 3, 4, 7)
        # 2: Invalid (contains 3, 4, 7)
        memo_arr = [0] * (n + 1)
        count = 0

        for i in range(1, n + 1):
            # 1. Get the status of the prefix (all digits except the last one)
            remaining_part = memo_arr[i // 10]
            
            # 2. Get the status of the last digit
            digit = i % 10
            
            # If the prefix is already invalid OR the current digit is invalid
            if remaining_part == 2 or digit in (3, 4, 7):
                memo_arr[i] = 2
            else:
                # If either the prefix OR the current digit is "Good" (2, 5, 6, 9)
                if remaining_part == 1 or digit in (2, 5, 6, 9):
                    memo_arr[i] = 1
                    count += 1
                else:
                    # Both prefix and digit are "Same" (0, 1, 8)
                    memo_arr[i] = 0

        return count