class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        int n = code.size();
        vector<int> res(n, 0);

        if (k == 0)
            return res;

        int start = (k > 0) ? 1 : n + k;
        int end = (k > 0) ? k : n - 1;

        int curr_sum = 0;
        for (int i = start; i <= end; i++) {
            curr_sum += code[i % n];
        }
        for (int i = 0; i < n; i++) {
            res[i] = curr_sum;
            curr_sum -= code[start % n];
            start++;
            end++;
            curr_sum += code[end % n];
        }
        return res;
    }
};