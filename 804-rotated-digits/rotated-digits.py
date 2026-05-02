class Solution:
    def rotatedDigits(self, n: int) -> int:
        memo_arr = [-1] * (n + 1)
        memo_arr[0] = 0
        count = 0

        for i in range(1, n + 1):
            remaining_part = memo_arr[i // 10]
            if remaining_part == 2:
                memo_arr[i] = 2
                continue

            digit = i % 10
            if digit in (0, 1, 8):
                digit_check = 0  # same number
            elif digit in (2, 5, 6, 9):
                digit_check = 1  # good number
            else:
                memo_arr[i] = 2  # invalid case
                continue

            if remaining_part == 0 and digit_check == 0:
                memo_arr[i] = 0
            else:
                memo_arr[i] = 1

            if memo_arr[i] == 1:
                count += 1

        return count
