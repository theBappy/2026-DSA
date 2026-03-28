class Solution {
    vector<vector<int>> LongestCommonPrefixMatrix (string s) {
        int n = s.length();
        vector<vector<int>> result(n, vector<int>(n, 0));
        
        for (int j = 0; j < n; j ++) {
            result[n-1][j] = result[j][n-1] = (s[j] == s[n-1])? 1 : 0; 
        }
        for (int i = n-2; i >= 0; i --) {
            for (int j = n-2; j >= 0; j --) {
                result[i][j] = (s[i] == s[j])? 1 + result[i+1][j+1] : 0;
            }
        }
        
        return result;
    }
    
public:
    string findTheString(vector<vector<int>>& lcp) {
        int n = lcp.size();
        
        string result (n, 'a');
        
        for (int i = 1; i < n; i ++) {
            vector<bool> not_equal(26, false);
            bool matched = false;
            
            for (int j = 0; j < i; j ++) {
                if (lcp[j][i] == 0) {
                    not_equal[result[j] - 'a'] = true;
                    continue;
                }
                
                matched = true;
                result[i] = result[j];
                break;
            }
        
            if (matched) continue;
            for (int j = 0; j < 26; j ++) {
                if (not_equal[j]) continue;
                
                result[i] = (char)('a' + j);
                break;
            }
        }
        
        if (LongestCommonPrefixMatrix(result) == lcp) return result;
        return "";
    }
};
