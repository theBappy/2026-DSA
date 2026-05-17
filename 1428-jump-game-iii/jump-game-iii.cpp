class Solution {
public:
    int n;
    bool dfs(vector<int>& arr, int i) {
        if (i < 0 || i >= n || arr[i] < 0) {
            return false;
        }
        if (arr[i] == 0) {
            return true;
        }
        arr[i] *= -1;
        int left = dfs(arr, i - arr[i]);
        int right = dfs(arr, i + arr[i]);

        return left || right;
    }
    bool canReach(vector<int>& arr, int start) {
        n = arr.size();
        return dfs(arr, start);
    }
};