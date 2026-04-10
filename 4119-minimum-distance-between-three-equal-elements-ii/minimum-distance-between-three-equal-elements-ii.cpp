class Solution {
public:
    int minimumDistance(vector<int>& nums) {
        unordered_map<int, vector<int>> pos;
        for (int i = 0; i < nums.size(); i++) {
            pos[nums[i]].push_back(i);
        }
        int ans = INT_MAX;
        for (auto const& [val, indices] : pos) {
            if (indices.size() >= 3) {
                for (int i = 0; i <= indices.size() - 3; i++) {
                    ans = min(ans, 2 * (indices[i + 2] - indices[i]));
                }
            }
        }
        return (ans == INT_MAX) ? -1 : ans;
    }
};