class Solution:
    def __init__(self):
        self.parent = []
        self.rank = []

    def find(self, i: int) -> int:
        if self.parent[i] != i:
            self.parent[i] = self.find(self.parent[i])
        return self.parent[i]

    def Union(self, x: int, y: int) -> None:
        parent_x = self.find(x)
        parent_y = self.find(y)
        if parent_x != parent_y:
            if self.rank[parent_x] > self.rank[parent_y]:
                self.parent[parent_y] = parent_x
            elif self.rank[parent_x] < self.rank[parent_y]:
                self.parent[parent_x] = parent_y
            else:
                self.parent[parent_x] = parent_y
                self.rank[parent_y] += 1

    def equationsPossible(self, equations: List[str]) -> bool:
        self.parent = list(range(26))
        self.rank = [1] * 26

        for s in equations:
            if s[1] == "=":
                self.Union(ord(s[0]) - ord("a"), ord(s[3]) - ord("a"))

        for s in equations:
            if s[1] == "!":
                if self.find(ord(s[0]) - ord("a")) == self.find(ord(s[3]) - ord("a")):
                    return False
        return True
