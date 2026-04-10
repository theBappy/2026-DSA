import math
from collections import defaultdict
class Solution:
    def minimumDistance(self, nums: List[int]) -> int:
        pos = defaultdict(list)
        for i, num in enumerate(nums):
            pos[num].append(i)
        ans = math.inf
        for indices in pos.values():
            if len(indices) >= 3:
                for i in range(len(indices) - 2):
                    ans = min(ans, 2 * (indices[i + 2] - indices[i]))

        return -1 if ans == math.inf else ans
