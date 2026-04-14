from functools import lru_cache
from typing import List

class Solution:
    def minimumTotalDistance(self, robot: List[int], factory: List[List[int]]) -> int:
        # Step 1: Sort robots and factories by position
        robot.sort()
        factory.sort()

        # Step 2: Flatten factory positions based on their capacity limits
        # If a factory at pos 2 has limit 3, we treat it as [2, 2, 2]
        factory_positions = []
        for pos, limit in factory:
            factory_positions.extend([pos] * limit)

        m, n = len(robot), len(factory_positions)

        # Step 3: Recursion with memoization
        @lru_cache(None)
        def solve(ri: int, fi: int) -> int:
            # Base Case: All robots are assigned
            if ri == m:
                return 0
            # Base Case: No more factory spots left, but robots remain
            if fi == n:
                return float('inf')

            # Option 1: Assign current robot to the current factory spot
            take = abs(robot[ri] - factory_positions[fi]) + solve(ri + 1, fi + 1)

            # Option 2: Skip this factory spot for the current robot
            skip = solve(ri, fi + 1)

            return min(take, skip)

        result = solve(0, 0)
        
        # Clear cache to prevent memory leaks in environments with multiple test cases
        solve.cache_clear()
        return result