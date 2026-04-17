class Solution {
public:
    int minMirrorPairDistance(vector<int>& nums) {
        auto reverseNum = [](int x) {
            int rev = 0;
            while (x > 0) {
                rev = rev * 10 + (x % 10);
                x /= 10;
            }
            return rev;
        };
        unordered_map<int, int> last_seen;
        int ans = INT_MAX;
        for (int i = 0; i < nums.size(); i++) {
            int current = nums[i];
            if (last_seen.count(current)) {
                ans = min(ans, i - last_seen[current]);
            }
            last_seen[reverseNum(current)] = i;
        }
        return ans == INT_MAX ? -1 : ans;
    }
};