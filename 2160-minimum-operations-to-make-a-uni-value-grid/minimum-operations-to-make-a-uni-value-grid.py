class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:
        vec = [num for row in grid for num in row]
        vec_length = len(vec)

        # Find the median using nth_element equivalent: sort and pick middle
        vec.sort()
        target = vec[vec_length // 2]

        result = 0
        for num in vec:
            if num % x != target % x:
                return -1
            result += abs(target - num) // x

        return result
