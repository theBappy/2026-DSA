class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        n = len(code)
        res = [0] * n

        if k == 0:
            return res

        # Windows boundaries
        # If k > 0: window is [1, k]
        # If k < 0: window is [n-abs(k), n-1]
        start, end = (1, k) if k > 0 else (n + k, n - 1)

        current_sum = 0
        # initial window sum
        for i in range(start, end + 1):
            current_sum += code[i % n]
        for i in range(n):
            res[i] = current_sum
            #removing old start, adding new end
            current_sum -= code[start % n]
            start += 1
            end += 1
            current_sum += code[end % n]
        return res
