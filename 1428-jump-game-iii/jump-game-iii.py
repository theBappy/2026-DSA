class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        n = len(arr)

        def dfs(i: int) -> bool:
            # base case: out of bound or already visited
            if i < 0 or i >= n or arr[i] < 0:
                return False

            # target found
            if arr[i] == 0:
                return True

            # mark as visited by flipping the sign
            arr[i] *= -1

            left = dfs(i - arr[i])
            right = dfs(i + arr[i])

            return left or right

        return dfs(start)
