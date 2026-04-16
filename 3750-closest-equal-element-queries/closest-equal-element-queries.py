class Solution:
    def solveQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        n = len(nums)

        indices = {}
        for i, num in enumerate(nums):
            if num not in indices:
                indices[num] = []
            indices[num].append(i)

        ans = [-1] * n

        for idx in indices.values():
            m = len(idx)

            if m == 1:
                continue
            for i in range(m):

                prev_idx_distance = min(abs(idx[i] - idx[(i - 1 + m) % m]), n - abs(idx[i] - idx[(i - 1 + m) % m]))

                next_idx_distance = min(abs(idx[i] - idx[(i + 1) % m]), n - abs(idx[i] - idx[(i + 1) % m]))

                ans[idx[i]] = min(prev_idx_distance, next_idx_distance)

        return [ans[idx] for idx in queries]
