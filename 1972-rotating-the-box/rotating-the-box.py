class Solution:
    def rotateTheBox(self, box: List[List[str]]) -> List[List[str]]:
        m = len(box)
        n = len(box[0])

        # rotate 90 degree clockwise by transpose and reverse
        res = list(map(list, zip(*box[::-1])))

        new_rows = n
        new_cols = m

        # apply gravity
        for j in range(new_cols):
            lowest_empty_space = new_rows - 1
            for i in range(new_rows - 1, -1, -1):
                if res[i][j] == "*":
                    lowest_empty_space = i - 1
                elif res[i][j] == "#":
                    # move stone to lowest empty space
                    res[i][j] = "."
                    res[lowest_empty_space][j] = "#"
                    lowest_empty_space -= 1

        return res
