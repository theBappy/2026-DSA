class Solution:
    def areSimilar(self, mat: List[List[int]], k: int) -> bool:
        m = len(mat)
        n = len(mat[0])
        k = k % n

        if k == 0:
            return True

        for i in range(m):
            for j in range(n):
                currIdx = j
                if i % 2 == 0:
                    finalIdx = (j + k) % n
                else:
                    finalIdx = (j - k + n) % n

                if mat[i][currIdx] != mat[i][finalIdx]:
                    return False
        return True
