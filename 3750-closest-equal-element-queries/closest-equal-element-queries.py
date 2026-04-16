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
                ans[idx[i]] = min(min(abs(idx[i] - idx[(i - 1 + m) % m]), n - abs(idx[i] - idx[(i - 1 + m) % m])), min(abs(idx[i] - idx[(i + 1) % m]), n - abs(idx[i] - idx[(i + 1) % m])))

        return [ans[idx] for idx in queries]
