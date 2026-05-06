class Solution {
public:
    vector<vector<char>> rotateTheBox(vector<vector<char>>& box) {
        int m = box.size();
        int n = box[0].size();

        vector<vector<char>> result(n, vector<char>(m, '.'));

        for (int i = 0; i < m; i++) {
            int lowest_empty_space = n - 1;
            for (int j = n - 1; j >= 0; j--) {
                if (box[i][j] == '#') {
                    result[lowest_empty_space][m - 1 - i] = '#';
                    lowest_empty_space--;
                } else if (box[i][j] == '*') {
                    result[j][m - 1 - i] = '*';
                    lowest_empty_space = j - 1;
                }
            }
        }
        return result;
    }
};