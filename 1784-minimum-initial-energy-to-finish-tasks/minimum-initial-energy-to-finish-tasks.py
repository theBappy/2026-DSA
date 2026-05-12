class Solution:
    def doAble(self, tasks: List[List[int]], mid: int) -> bool:
        for task in tasks:
            actualEnergyNeed = task[0]
            minEnergyNeed = task[1]

            if mid < minEnergyNeed:
                return False

            mid -= actualEnergyNeed
        return True

    def minimumEffort(self, tasks: List[List[int]]) -> int:
        left, right = 0, int(1e9)
        result = float("inf")

        tasks.sort(key=lambda task: task[1] - task[0], reverse=True)

        while left <= right:
            mid = left + (right - left) // 2
            if self.doAble(tasks, mid):
                result = mid
                right = mid - 1
            else:
                left = mid + 1

        return result
