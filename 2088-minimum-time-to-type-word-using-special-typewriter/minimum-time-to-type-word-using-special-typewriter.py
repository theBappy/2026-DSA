class Solution:
    def minTimeToType(self, word: str) -> int:
        ans = 0
        pointer = "a"
        for char in word:
            clockwise_move = abs(ord(char) - ord(pointer))
            counter_clockwise_move = 26 - clockwise_move
            ans += min(clockwise_move, counter_clockwise_move) + 1
            pointer = char
        return ans
