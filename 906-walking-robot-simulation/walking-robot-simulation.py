class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        st = set()
        for obs in obstacles:
            key = f"{obs[0]}_{obs[1]}"
            st.add(key)
        x, y = 0, 0
        maxD = 0
        dir_x, dir_y = 0, 1
        for command in commands:
            if command == -2:
                dir_x, dir_y = -dir_y, dir_x
            elif command == -1:
                dir_x, dir_y = dir_y, -dir_x
            else:
                for _ in range(command):
                    newX = x + dir_x
                    newY = y + dir_y
                    newKey = f"{newX}_{newY}"
                    if newKey in st:
                        break
                    x, y = newX, newY
            maxD = max(maxD, x * x + y * y)
        return maxD
