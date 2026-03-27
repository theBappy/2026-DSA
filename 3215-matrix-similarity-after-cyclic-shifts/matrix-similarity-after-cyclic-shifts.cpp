class Solution {
public:
    bool areSimilar(vector<vector<int>>& mat, int k) {
        vector<vector<int>> temp = mat;
        int m = mat.size();
        int n = mat[0].size();
        k = k%n;
        if(k == 0) { //no shifting
            return true;
        }
      
        for(int i = 0; i<m; i++) {
            if(i%2) { // odd
                rotate(rbegin(mat[i]), rbegin(mat[i]) + k, rend(mat[i]));
            } else {
                rotate(begin(mat[i]), begin(mat[i]) + k, end(mat[i]));
            }
        }

        return temp == mat;
    }
};
