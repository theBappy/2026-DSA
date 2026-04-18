class Solution {
public:
    int mirrorDistance(int n) {
        // Tc=(long(n)) for reversing 
        // Sc = O(log(n)) storing string version of n
        string s = to_string(n);
        reverse(begin(s), end(s));

        int rev = stoi(s);
        return abs(n - rev);
    }
};