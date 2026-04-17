class Solution {
public:
    int getReverse(int n) {
        int reversed = 0;
        while (n > 0) {
            int remaining = n % 10;
            reversed = reversed * 10 + remaining;
            n /= 10;
        }
        return reversed;
    }
    int minMirrorPairDistance(vector<int>& nums) {
        unordered_map<int, int> mp; // reversed -> idx
        int result = INT_MAX;
        for (int i = 0; i < nums.size(); i++) {
            if (mp.count(nums[i])) {
                result = min(result, i - mp[nums[i]]);
            }
            mp[getReverse(nums[i])] = i;
        }
        return result == INT_MAX ? -1 : result;
    }
};