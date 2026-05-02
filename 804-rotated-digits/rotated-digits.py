class Solution:
    def rotatedDigits(self, n: int) -> int:
        count = 0
        for i in range(1, n + 1):
            s = str(i)
            # must not have 3,4,7
            if any(d in s for d in "347"):
                continue
            # must have at least one of 2,5,6,9
            if any(d in s for d in "2569"):
                count += 1
        return count
