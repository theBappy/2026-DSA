class Solution:
    def rotateTheBox(self, box: List[List[str]]) -> List[List[str]]:
        m = len(box)
        n = len(box[0])

        result = [[None] * m for _ in range(n)]

        # Transpose
        for i in range(n):
            for j in range(m):
                result[i][j] = box[j][i]

        # Reverse each row for 90 degree rotation
        for row in result:
            row.reverse()

        # Apply gravity
        for j in range(m):
            for i in range(n - 1, -1, -1):
                if result[i][j] == '.':  # if it is a space
                    stoneRow = -1

                    for k in range(i - 1, -1, -1):
                        if result[k][j] == '*':
                            break
                        elif result[k][j] == '#':
                            stoneRow = k
                            break

                    if stoneRow != -1:
                        result[i][j] = '#'
                        result[stoneRow][j] = '.'

        return result