class Solution:
    def minMirrorPairDistance(self, nums: List[int]) -> int:
        def reverse_num(x: int) -> int:
            rev = 0
            while x > 0:
                rev = rev * 10 + (x % 10)
                x //= 10
            return rev

        last_seen: dict[int, int] = {}
        ans = float("inf")
        for i, current in enumerate(nums):
            if current in last_seen:
                ans = min(ans, i - last_seen[current])
            last_seen[reverse_num(current)] = i
        return -1 if ans == float("inf") else ans
