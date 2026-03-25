class Solution:
    def canPartitionGrid(self, grid: List[List[int]]) -> bool:
        m = len(grid)
        n = len(grid[0])

        rowSum = [0] * m
        colSum = [0] * n

        total = 0
        for i in range(m):
            for j in range(n):
                total += grid[i][j]
                rowSum[i] += grid[i][j]
                colSum[j] += grid[i][j]

        if total % 2 != 0:
            return False

        upper = 0
        for i in range(m - 1):
            upper += rowSum[i]
            if upper == total - upper:
                return True

        left = 0
        for j in range(n - 1):
            left += colSum[j]
            if left == total - left:
                return True

        return False
