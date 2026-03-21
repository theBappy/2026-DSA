class Solution:
    def reverseSubmatrix(self, grid: List[List[int]], x: int, y: int, k: int) -> List[List[int]]:
        startRow = x
        endRow = x + k - 1

        startCol = y
        endCol = y + k - 1

        while startRow <= endRow:
            for j in range(startCol, endCol + 1):
                grid[startRow][j], grid[endRow][j] = grid[endRow][j], grid[startRow][j]
            startRow += 1
            endRow -= 1
        return grid
        