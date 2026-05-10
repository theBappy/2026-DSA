class Solution {
public:
    int maximumJumps(vector<int>& nums, int target) {
        int n = nums.size();

        vector<int> dp(n, -1);

        // base case
        dp[0] = 0;

        for(int i = 0; i < n; i++) {

            // unreachable index
            if(dp[i] == -1) continue;

            for(int j = i + 1; j < n; j++) {
                long long diff = 1LL * nums[j] - nums[i];

                if(-target <= diff && diff <= target) {
                    dp[j] = max(dp[j], dp[i] + 1);
                }
            }
        }

        return dp[n - 1];
    }
};