class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) == len(goal) and (s + s).find(goal) != -1:
            return True
        return False
