class Solution:
    def rotatedDigits(self, n: int) -> int:
        memo_arr = [0] * (n + 1)
        count = 0

        for i in range(1, n + 1):
            remaining_part = memo_arr[i // 10]
            digit = i % 10

            if remaining_part == 2 or digit in (3, 4, 7):
                memo_arr[i] = 2
            else:
                if remaining_part == 1 or digit in (2, 5, 6, 9):
                    memo_arr[i] = 1
                    count += 1
                else:
                    memo_arr[i] = 0

        return count
