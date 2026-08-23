class Solution:
    def sumGame(self, num: str) -> bool:
        sumL = qL = 0
        sumR = qR = 0
        n = len(num)

        for i in range(n):
            if i < n // 2:
                if num[i] == '?':
                    qL += 1
                else:
                    sumL += int(num[i])
            else:
                if num[i] == '?':
                    qR += 1
                else:
                    sumR += int(num[i])

        if (qL + qR) % 2:
            return True

        ds = sumL - sumR
        dq = qR - qL

        return ds != (dq // 2) * 9