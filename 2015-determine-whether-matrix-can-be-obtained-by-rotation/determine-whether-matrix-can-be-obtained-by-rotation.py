class Solution:
    def __init__(self):
        self.n = 0
    def rotate(self, mat: List[List[int]]) -> None:
        # tranpose
        for i in range(self.n):
            for j in range(i, self.n):
                mat[i][j], mat[j][i] = mat[j][i], mat[i][j]
        # reverse
        for i in range(self.n):
            mat[i].reverse()
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        self.n = len(mat)
        for _ in range(4):
            if mat == target:
                return True
            self.rotate(mat)
        return False

        