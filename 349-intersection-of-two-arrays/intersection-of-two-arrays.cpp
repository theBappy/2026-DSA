class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> seen(nums1.begin(), nums1.end());
        vector<int> result;

        for (int& num : nums2) {
            if (seen.count(num)) {
                result.push_back(num);
                seen.erase(num);
            }
        }
        return result;
    }
};