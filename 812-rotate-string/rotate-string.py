class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        m = len(s)
        n = len(goal)
        if m != n:
            return False
        s_list = list(s)
        for _ in range(m):
            s_list = s_list[1:] + s_list[:1]
            if "".join(s_list) == goal:
                return True
        return False
