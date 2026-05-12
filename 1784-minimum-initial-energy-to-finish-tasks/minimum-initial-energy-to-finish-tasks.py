class Solution:
    def minimumEffort(self, tasks: List[List[int]]) -> int:
        # Sort by (minimum - actual) descending
        tasks.sort(key=lambda x: x[1] - x[0], reverse=True)

        total_needed = 0
        current_spent = 0

        for actual, minimum in tasks:
            total_needed = max(total_needed, current_spent + minimum)
            current_spent += actual

        return total_needed
