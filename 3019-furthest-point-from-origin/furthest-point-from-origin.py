class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        leftCount = 0
        rightCount = 0
        spacesCount = 0
        for ch in moves:
            if ch == "L":
                leftCount += 1
            if ch == "R":
                rightCount += 1
            if ch == "_":
                spacesCount += 1
        return abs(leftCount - rightCount) + spacesCount