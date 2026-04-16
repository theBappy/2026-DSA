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
                curr = idx[i]

                prev_idx = idx[(i - 1 + m) % m]
                next_idx = idx[(i + 1) % m]

                prev_idx_distance = abs(curr - prev_idx)
                prev_idx_distance = min(prev_idx_distance, n - prev_idx_distance)

                next_idx_distance = abs(curr - next_idx)
                next_idx_distance = min(next_idx_distance, n - next_idx_distance)

                ans[curr] = min(prev_idx_distance, next_idx_distance)

        return [ans[idx] for idx in queries]
