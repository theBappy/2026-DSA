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

                prev_idx_distance = min(abs(curr - prev_idx), n - abs(curr - prev_idx))

                next_idx_distance = min(abs(curr - next_idx), n - abs(curr - next_idx))

                ans[curr] = min(prev_idx_distance, next_idx_distance)

        return [ans[idx] for idx in queries]
