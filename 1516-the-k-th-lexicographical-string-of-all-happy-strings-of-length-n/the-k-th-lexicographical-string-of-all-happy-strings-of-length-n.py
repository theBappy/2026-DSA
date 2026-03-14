class Solution:
    def __init__(self):
        self.count = 0
        self.res = ""

    def getHappyString(self, n: int, k: int) -> str:
        self.count = 0
        self.res = ""
        self.backtrack(n, k, [], ' ')
        return self.res

    def backtrack(self, n, k, sb, lastChar):
        if len(sb) == n:
            self.count += 1
            if self.count == k:
                self.res = "".join(sb)
            return

        for c in ['a', 'b', 'c']:
            if c != lastChar:
                sb.append(c)
                self.backtrack(n, k, sb, c)
                sb.pop()
                if self.res:
                    return