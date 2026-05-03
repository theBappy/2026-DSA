class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        n = len(s)
        if n != len(goal):
            return False

        # try every possible starting shift 'i'
        for i in range(n):
            match = True
            for j in range(n):
                # use modulo to wrap around the index of s
                if s[(i + j) % n] != goal[j]:
                    match = False
                    break
            if match:
                return True
        return False
