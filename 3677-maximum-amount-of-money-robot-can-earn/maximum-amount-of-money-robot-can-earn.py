class Solution:
    def maximumAmount(self, coins: List[List[int]]) -> int:
        m, n = len(coins), len(coins[0])
        dp = [[-inf] * 3 for _ in range(n+1)]
        dp[0][0] = 0
        for row in coins:
            for i, coin in enumerate(row):
                for k in range(3):
                    dp[i][k] = max(dp[i][k], dp[i-1][k]) + coin
                if coin < 0:
                    dp[i][1:] = max(dp[i][1], dp[i][0] - coin), max(dp[i][2], dp[i][1] - coin)
        return max(dp[-2])