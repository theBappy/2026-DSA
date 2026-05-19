class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> counts;
        vector<int> result;

        // counts frequencies of elements in nums1
        for (int &num : nums1) {
            counts[num]++;
        }

        // match elements from nums2
        for (int &num : nums2) {
            if (counts[num] > 0) {
                result.push_back(num);
                counts[num]--;
            }
        }
        return result;
    }
};