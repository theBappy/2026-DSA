class Solution {
public:
    int maxRotateFunction(vector<int>& nums) {
        int n = nums.size();
        int total_sum = accumulate(nums.begin(), nums.end(), 0);

        int current_f = 0;
        for (int i = 0; i < n; i++) {
            current_f += i * nums[i];
        }
        int max_f = current_f;

        for (int k = 1; k < n; k++) {
            current_f = current_f + total_sum - n * nums[n - k];
            if (current_f > max_f)
                max_f = current_f;
        }
        return max_f;
    }
};