class Solution:
    def processStr(self, s: str, k: int) -> str:
        n = len(s)
        lens = []
        ln = 0

        for c in s:
            if c == '*':
                ln = max(ln - 1, 0)
            elif c == '#':
                ln *= 2
            elif c != '%':
                ln += 1
            
            lens.append(ln)

        if k >= ln:
            return '.'

        for i in range(n - 1, -1, -1):
            c = s[i]
            if c == '*':
                continue
            elif c == '#':
                if k >= lens[i] // 2:
                    k -= lens[i] // 2
            elif c == '%':
                k = lens[i] - 1 - k
            else:
                if lens[i] == k + 1:
                    return c