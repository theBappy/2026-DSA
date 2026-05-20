class Solution {
public:
    vector<int> findThePrefixCommonArray(vector<int>& A, vector<int>& B) {
        int n = A.size();
        vector<int> result(n);
        vector<bool> isPresentInA(n + 1, false); // isPresent[i] = true, means i is present in A
        vector<bool> isPresentInB(n + 1, false);

        for (int i = 0; i < n; i++) {
            isPresentInA[A[i]] = true;
            isPresentInB[B[i]] = true;

            int count = 0;
            for (int num = 1; num <= n; num++) {
                if (isPresentInA[num] == true && isPresentInB[num] == true) {
                    count++;
                }
            }
            result[i] = count;
        }
        return result;
    }
};