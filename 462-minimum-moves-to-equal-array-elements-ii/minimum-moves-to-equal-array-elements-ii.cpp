class Solution {
public:
    int minMoves2(vector<int>& nums) {
        // sort to find the median
        sort(nums.begin(), nums.end());

        // identify the middle element
        int median = nums[nums.size() / 2];

        // sum the absolute difference
        long long moves = 0;
        for (int &num : nums) {
            moves += abs(num - median);
        }
        return moves;
    }
};