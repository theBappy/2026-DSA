class Solution {
public:
    int minimumEffort(vector<vector<int>>& tasks) {
        // Sort by difference (min - actual) descending
        sort(tasks.begin(), tasks.end(),
             [](vector<int>& task1, vector<int>& task2) {
                 return (task1[1] - task1[0]) > (task2[1] - task2[0]);
             });

        int total_needed = 0;
        int current_spent = 0;

        for (auto& task : tasks) {
            total_needed = max(total_needed, current_spent + task[1]);
            current_spent += task[0];
        }
        return total_needed;
    }
};