class Solution {
public:
    bool isGood(vector<int>& nums) {
        int n = nums.size() - 1;
        unordered_set<int> seen;
        bool dup = false;

        for (int num : nums) {
            if (num > n) {
                return false;
            }
            if (seen.count(num)) {
                if (num < n || dup) {
                    return false;
                }
                dup = true;
                continue;
            }
            seen.insert(num);
        }
        return true;
    }
};