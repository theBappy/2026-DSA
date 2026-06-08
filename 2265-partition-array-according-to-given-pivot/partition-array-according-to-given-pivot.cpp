class Solution {
public:
    vector<int> pivotArray(std::vector<int>& nums, int pivot) {
        int n = nums.size();
        vector<int> result(n);

        // Original nums pointers
        int left_idx = 0;
        int right_idx = n - 1;

        // Result array destination pointers
        int res_left = 0;
        int res_right = n - 1;

        while (left_idx < n && right_idx >= 0) {
            if (nums[left_idx] < pivot) {
                result[res_left] = nums[left_idx];
                res_left++;
            }
            if (nums[right_idx] > pivot) {
                result[res_right] = nums[right_idx];
                res_right--;
            }
            left_idx++;
            right_idx--;
        }

        // Fill the remaining middle elements with pivot
        while (res_left <= res_right) {
            result[res_left] = pivot;
            res_left++;
        }

        return result;
    }
};