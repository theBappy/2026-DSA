class Solution:
    def lexPalindromicPermutation(self, s: str, target: str) -> str:
        n = len(s)
        freq = [0] * 26

        for ch in s:
            freq[ord(ch) - ord('a')] += 1

        middle = ""

        for i in range(26):
            if freq[i] % 2 == 1:
                if middle:
                    return ""
                middle = chr(ord('a') + i)

            freq[i] //= 2

        half_len = n // 2
        half = []
        matched = 0

        while matched < half_len:
            c = ord(target[matched]) - ord('a')

            if freq[c] == 0:
                break

            freq[c] -= 1
            half.append(chr(ord('a') + c))
            matched += 1

        i = matched

        while i >= 0:
            if i < half_len:
                start = ord(target[i]) - ord('a') + 1

                for c in range(start, 26):
                    if freq[c] == 0:
                        continue

                    freq[c] -= 1

                    suffix = []

                    for j in range(26):
                        suffix.append(
                            chr(ord('a') + j) * freq[j]
                        )

                    left = "".join(half[:i]) + chr(ord('a') + c) + "".join(suffix)
                    candidate = left + middle + left[::-1]

                    if candidate > target:
                        return candidate

                    freq[c] += 1

            if i == half_len:
                left = "".join(half)

                candidate = left + middle + left[::-1]

                if candidate > target:
                    return candidate

            i -= 1

            if i >= 0:
                c = ord(half[i]) - ord('a')
                freq[c] += 1
                half.pop()

        return ""