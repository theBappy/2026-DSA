class Solution:
    def minimumEffort(self, tasks: List[List[int]]) -> int:
        # sort by 'requirement gap' descending(greedily approach)
        tasks.sort(key=lambda task: task[1] - task[0], reverse=True)

        ans = 0
        current_sum = 0

        for actual, minimum in tasks:
            # we need minimum energy right now, already spent current_sum from our initial tank, so initital tank must be atleast current_sum+minimum
            ans = max(ans, current_sum + minimum)

            # keep track of total energy consumed so far
            current_sum += actual

        return ans
