class Solution {
public:
    long long maxTotalValue(vector<int>& nums, int k) {
        if(nums.empty()) return 0;
        
        // Find both the minimum and maximum elements in a single pass
        auto [min_it, max_it] = minmax_element(nums.begin(), nums.end());

        // Cast to long long to prevent potential integer overflow during multiplication
        return static_cast<long long>(*max_it - *min_it) * k;
    }
};