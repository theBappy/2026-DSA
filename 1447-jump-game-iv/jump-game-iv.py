from collections import deque, defaultdict


class Solution:
    def minJumps(self, arr: List[int]) -> int:
        n = len(arr)  # last index -> n - 1

        mp = defaultdict(list)  # number -> indices
        visited = [False] * n

        for i, num in enumerate(arr):
            mp[num].append(i)

        q = deque([0])
        visited[0] = True

        steps = 0
        while q:
            size = len(q)
            for _ in range(size):
                curr_idx = q.popleft()

                if curr_idx == n - 1:
                    return steps  # reach destination

                left = curr_idx - 1
                right = curr_idx + 1

                if left >= 0 and not visited[left]:
                    q.append(left)
                    visited[left] = True
                if right < n and not visited[right]:
                    q.append(right)
                    visited[right] = True

                for idx in mp[arr[curr_idx]]:
                    if not visited[idx]:
                        q.append(idx)
                        visited[idx] = True

                # remove to avoid duplicate processing
                mp.pop(arr[curr_idx], None)

            steps += 1

        return -1
