class Solution {
public:
    vector<int> solveQueries(vector<int>& nums, vector<int>& queries) {
        int n = nums.size();

        unordered_map<int, vector<int>> indices;

        for (int i = 0; i < n; i++) {
            indices[nums[i]].push_back(i);
        }

        vector<int> answer(n, -1);

        for (auto& idx : indices) {
            vector<int>& pos = idx.second;
            int m = pos.size();

            if (m == 1) continue;

            for (int i = 0; i < m; i++) {
                int curr = pos[i];

                int prev = pos[(i - 1 + m) % m];
                int next = pos[(i + 1) % m];

                int distPrev = abs(curr - prev);
                distPrev = min(distPrev, n - distPrev);

                int distNext = abs(curr - next);
                distNext = min(distNext, n - distNext);

                answer[curr] = min(distPrev, distNext);
            }
        }

        vector<int> result;
        for (int idx : queries) {
            result.push_back(answer[idx]);
        }

        return result;
    }
};