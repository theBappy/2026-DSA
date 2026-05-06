class Solution:
    def rotateTheBox(self, box: List[List[str]]) -> List[List[str]]:
        m, n = len(box), len(box[0])

        # initialize result matrix with the new dimensions (n x m)
        res = [["." for _ in range(m)] for _ in range(n)]

        for i in range(m):
            # apply gravity to the row horizontally (right side is the "bottom")
            lowest_empty_space = n - 1
            for j in range(n - 1, -1, -1):
                if box[i][j] == "*":
                    # obstacle stays put, but we map its rotated position
                    res[j][m - 1 - i] = "*"
                    lowest_empty_space = j - 1
                elif box[i][j] == "#":
                    # stone moves to the rightmost empty spot
                    res[lowest_empty_space][m - 1 - i] = "#"
                    lowest_empty_space -= 1
            # empty spaces '.' are already handled by the res initialization
        return res
