class Solution {
public:
    int maxDistance(vector<int>& colors) {
        int n = colors.size();
        int res = 0;
        for (int i = 0; i < n; i++) {
            if (colors[i] != colors[0]) {
                res = max(res, i);
            }
            if (colors[i] != colors[n - 1]) {
                res = max(res, abs(i - (n - 1)));
            }
        }
        return res;
    }
};