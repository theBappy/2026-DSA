class Solution {
public:
    vector<vector<char>> rotateTheBox(vector<vector<char>>& box) {
        int m = box.size();
        int n = box[0].size();

        vector<vector<char>> result(n, vector<char>(m));

        //Transpose
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                result[i][j] = box[j][i];
            }
        }

        //90 degree k lie - Reverse kardo ahr row ko
        for(vector<char>& row : result) {
            reverse(begin(row), end(row));
        }

        //Apply the gravity
        for(int j = 0; j < m; j++) {
            for(int i = n-1; i >= 0; i--) {
                if(result[i][j] == '.') { //if it is a space
                    int stoneRow = -1;

                    for(int k = i-1; k >= 0; k--) {
                        if(result[k][j] == '*') {
                            break;
                        } else if(result[k][j] == '#') {
                            stoneRow = k;
                            break;
                        }
                    }

                    if(stoneRow != -1) {
                        result[i][j] = '#';
                        result[stoneRow][j] = '.';
                    }
                }
            }
        }

        return result;
    }
};