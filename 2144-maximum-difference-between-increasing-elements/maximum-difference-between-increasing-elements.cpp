class Solution {
public:
    int maximumDifference(vector<int>& nums) {
        int n = nums.size();
        int res = -1;
        int min_element = nums[0];
        for (int i = 1; i < n; i++) {
            if (nums[i] > min_element) {
                res = max(res, nums[i] - min_element);
            } else {
                min_element = nums[i];
            }
        }
        return res;
    }
};