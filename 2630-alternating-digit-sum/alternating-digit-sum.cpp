class Solution {
public:
    int alternateDigitSum(int n) {
        string s = to_string(n);
        int res = 0;
        for (int i = 0; i < s.length(); i++) {
            // '0' is 48 in ASCII, subtracting it gets the integer value
            int digit = s[i] - '0';
            res += (i % 2 == 0) ? digit : -digit;
        }
        return res;
    }
};