class Solution {
public:
    int maxDistance(vector<int>& colors) {
        int n = colors.size();
        int res = 0;

        for (int j = n - 1; j > 0; j--) {
            if (colors[0] != colors[j]) {
                res = max(res, j);
                break;
            }
        }

        for (int i = 0; i < n - 1; i++) {
            if (colors[i] != colors[n - 1]) {
                res = max(res, n - 1 - i);
                break;
            }
        }

        return res;
    }
};