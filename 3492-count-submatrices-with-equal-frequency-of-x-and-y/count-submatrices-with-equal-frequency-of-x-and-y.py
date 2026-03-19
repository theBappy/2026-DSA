class Solution:
    def numberOfSubmatrices(self, grid: List[List[str]]) -> int:
        m = len(grid)
        n = len(grid[0])

        cumSumX = [[0] * n for _ in range(m)]
        cumSumY = [[0] * n for _ in range(m)]

        count = 0

        for i in range(m):
            for j in range(n):
                cumSumX[i][j] = 1 if grid[i][j] == "X" else 0
                cumSumY[i][j] = 1 if grid[i][j] == "Y" else 0

                if i - 1 >= 0:
                    cumSumX[i][j] += cumSumX[i - 1][j]
                    cumSumY[i][j] += cumSumY[i - 1][j]

                if j - 1 >= 0:
                    cumSumX[i][j] += cumSumX[i][j - 1]
                    cumSumY[i][j] += cumSumY[i][j - 1]

                if i - 1 >= 0 and j - 1 >= 0:
                    cumSumX[i][j] -= cumSumX[i - 1][j - 1]
                    cumSumY[i][j] -= cumSumY[i - 1][j - 1]

                if cumSumX[i][j] == cumSumY[i][j] and cumSumX[i][j] > 0:
                    count += 1
        return count
