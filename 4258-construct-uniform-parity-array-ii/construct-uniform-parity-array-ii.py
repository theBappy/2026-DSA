class Solution:
    def uniformArray(self, A: list[int]) -> bool:
        return not (min(A) ^ reduce(or_, A)) & 1