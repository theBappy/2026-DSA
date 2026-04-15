class Solution:
    def closestTarget(self, words: List[str], target: str, startIndex: int) -> int:
        n = len(words)
        result = float("inf")
        for i in range(n):
            if words[i] == target:
                clockwise_dist = abs(i - startIndex)
                anti_clockwise_dist = n - clockwise_dist
                result = min(result, clockwise_dist, anti_clockwise_dist)
        return -1 if result == float("inf") else result
