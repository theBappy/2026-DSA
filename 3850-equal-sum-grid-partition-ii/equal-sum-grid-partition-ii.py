

class Solution:
    def __init__(self):
        self.total = 0

    def checkHorCuts(self, grid: List[List[int]]) -> bool:
        m = len(grid)
        n = len(grid[0])

        st = set()
        top = 0

        for i in range(m - 1):
            for j in range(n):
                st.add(grid[i][j])
                top += grid[i][j]

            bottom = self.total - top
            diff = top - bottom

            if diff == 0:
                return True

            if diff == grid[0][0]:
                return True
            if diff == grid[0][n - 1]:
                return True
            if diff == grid[i][0]:
                return True

            if i > 0 and n > 1 and diff in st:
                return True

        return False

    def canPartitionGrid(self, grid: List[List[int]]) -> bool:
        m = len(grid)
        n = len(grid[0])

        self.total = sum(sum(row) for row in grid)

        # Horizontal cuts
        if self.checkHorCuts(grid):
            return True

        grid.reverse()

        if self.checkHorCuts(grid):
            return True

        grid.reverse()  # original grid m*n

        # Vertical cuts checking by using checkHorCuts method on transpose
        transposeGrid = [[0] * m for _ in range(n)]

        for i in range(m):
            for j in range(n):
                transposeGrid[j][i] = grid[i][j]

        if self.checkHorCuts(transposeGrid):
            return True

        transposeGrid.reverse()

        if self.checkHorCuts(transposeGrid):
            return True

        return False
        