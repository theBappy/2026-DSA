class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        ranks = {}
        rank = 1
        for x in sorted(list(set(arr))):
            ranks[x] = rank
            rank += 1
        for i in range(len(arr)):
            arr[i] = ranks[arr[i]]
        return arr
