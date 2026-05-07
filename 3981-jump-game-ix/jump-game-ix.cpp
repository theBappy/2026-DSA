class Solution {
public:
    vector<int> maxValue(vector<int>& nums) {
        int n = nums.size();
        vector<int> prefixMax(n), suffixMin(n), resultArr(n);
        prefixMax[0] = nums[0];
        suffixMin[n - 1] = nums[n - 1];

        // build prefix max array
        for (int i = 1; i < n; i++) {
            prefixMax[i] = max(prefixMax[i - 1], nums[i]);
        }

        // build suffix min array
        for (int i = n - 2; i >= 0; i--) {
            suffixMin[i] = min(suffixMin[i + 1], nums[i]);
        }

        // result array
        resultArr[n - 1] = prefixMax[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            resultArr[i] = prefixMax[i];
            if (prefixMax[i] > suffixMin[i + 1])
                resultArr[i] = resultArr[i + 1];
        }
        return resultArr;
    }
};