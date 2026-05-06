class Solution {
public:
    vector<vector<char>> rotateTheBox(vector<vector<char>>& box) {
        int m = box.size();
        int n = box[0].size();

        vector<vector<char>> result(n, vector<char>(m));

        // transpose
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                result[i][j] = box[j][i];
            }
        }

        // reverse(90 degree rotation)
        for (vector<char>& row : result) {
            reverse(begin(row), end(row));
        }

        // apply gravity
        for (int j = 0; j < m; j++) {
            int spaceBottomn = n - 1;
            for (int i = n - 1; i >= 0; i--) {
                if (result[i][j] == '*') {
                    spaceBottomn = i - 1;
                    continue;
                }
                if (result[i][j] == '#') {
                    result[i][j] = '.';
                    result[spaceBottomn][j] = '#';
                    spaceBottomn--;
                }
            }
        }
        return result;
    }
};