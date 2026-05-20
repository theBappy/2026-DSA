class Solution {
public:
    vector<int> findThePrefixCommonArray(vector<int>& A, vector<int>& B) {
        int n = A.size();
        vector<int> result(n);
        // Pre-allocated vector filled with 0s (1-indexed, size n + 1)
        vector<int> freq(n + 1, 0);
        
        int count = 0;
        for (int i = 0; i < n; ++i) {
            // Process element from array A
            if (++freq[A[i]] == 2) {
                count++;
            }
            
            // Process element from array B
            if (++freq[B[i]] == 2) {
                count++;
            }
            
            result[i] = count;
        }
        
        return result;
    }
};