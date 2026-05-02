class Solution:
    def rotatedDigits(self, n: int) -> int:
        count = 0
        for i in range(1, n + 1):
            check = i
            is_valid = True
            has_changed = False
            while check > 0:
                digit = check % 10
                if digit in (3, 4, 7):
                    is_valid = False
                elif digit in (2, 5, 6, 9):
                    has_changed = True
                check //= 10
            if is_valid and has_changed:
                count += 1
        return count
