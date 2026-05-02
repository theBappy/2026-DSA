class Solution:
    def rotatedDigits(self, n: int) -> int:
        s = str(n)
        memo = {}

        def dp(idx, is_less, has_changed):
            state = (idx, is_less, has_changed)
            if state in memo:
                return memo[state]

            # base case - we've filled all digits positions
            if idx == len(s):
                return 1 if has_changed else 0

            res = 0
            # determine the upper bound for the current digit
            limit = int(s[idx]) if not is_less else 9

            for d in range(limit + 1):
                # rule 1: skip invalid digits
                if d in (3, 4, 7):
                    continue

                # rule 2: track if the number have a "transformer" digit
                new_has_changed = has_changed or (d in (2, 5, 6, 9))

                # rule 3: update the 'is_less' constraint
                new_is_less = is_less or (d < limit)

                res += dp(idx + 1, new_is_less, new_has_changed)

            memo[state] = res
            return res

        return dp(0, False, False)
