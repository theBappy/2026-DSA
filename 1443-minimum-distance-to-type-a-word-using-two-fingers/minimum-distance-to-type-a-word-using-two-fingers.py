from functools import lru_cache

class Solution:
    def getCoord(self, pos):
        return pos // 6, pos % 6

    def getDistance(self, pos1, pos2):
        x1, y1 = self.getCoord(pos1)
        x2, y2 = self.getCoord(pos2)
        return abs(x1 - x2) + abs(y1 - y2)

    def minimumDistance(self, word: str) -> int:
        n = len(word)

        @lru_cache(None)
        def solve(i, f1, f2):
            if i >= n:
                return 0

            curr = ord(word[i]) - ord('A')

            # non used
            if f1 == 26 and f2 == 26:
                return solve(i + 1, curr, f2)

            # f2 not used
            if f2 == 26:
                moveF2 = solve(i + 1, f1, curr)
                moveF1 = self.getDistance(f1, curr) + solve(i + 1, curr, f2)
                return min(moveF1, moveF2)

            # both finger used
            moveF1 = self.getDistance(f1, curr) + solve(i + 1, curr, f2)
            moveF2 = self.getDistance(f2, curr) + solve(i + 1, f1, curr)
            return min(moveF1, moveF2)

        return solve(0, 26, 26)