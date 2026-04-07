class Robot:

    def __init__(self, width: int, height: int):
        self.idx = 0
        self.moved = False
        self.pos = []

        for x in range(width):
            self.pos.append([x, 0, 0])
        for y in range(1, height):
            self.pos.append([width-1,y, 1])
        for x in range(width-2, -1, -1):
            self.pos.append([x, height-1, 2])
        for y in range(height-2, 0, -1):
            self.pos.append([0, y, 3])
        self.pos[0][2] = 3
        

    def step(self, num: int) -> None:
        self.moved = True
        self.idx = (self.idx + num) % len(self.pos)
        

    def getPos(self) -> List[int]:
        return [self.pos[self.idx][0], self.pos[self.idx][1]]
        

    def getDir(self) -> str:
        if not self.moved:
            return "East"
        d = self.pos[self.idx][2]
        if d == 0:
            return "East"
        elif d == 1:
            return "North"
        elif d == 2:
            return "West"
        return "South"
        


# Your Robot object will be instantiated and called as such:
# obj = Robot(width, height)
# obj.step(num)
# param_2 = obj.getPos()
# param_3 = obj.getDir()