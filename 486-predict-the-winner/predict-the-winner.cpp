class Solution {
public:
    int t[23][23];
    
    int solve(vector<int>& nums, int i, int j) {
        if (i > j)
            return 0;
        
        if (t[i][j] != -1)
            return t[i][j];
        
        int pick_i = nums[i] - solve(nums, i + 1, j);
        int pick_j = nums[j] - solve(nums, i, j - 1);
        
        t[i][j] = max(pick_i, pick_j);
        return t[i][j];
    }
    
    bool predictTheWinner(vector<int>& nums) {
        int n = nums.size();
        memset(t, -1, sizeof(t));
        return solve(nums, 0, n - 1) >= 0;
    }
};