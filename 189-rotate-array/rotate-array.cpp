#include <vector>
#include <algorithm>

class Solution {
public:
    void rotate(std::vector<int>& nums, int k) {
        k %= nums.size();

        auto reverse = [&](int left, int right) {
            while (left < right) {
                swap(nums[left], nums[right]);
                left++;
                right--;
            }
        };

        reverse(0, nums.size() - 1);
        reverse(0, k - 1);
        reverse(k, nums.size() - 1);
    }
};