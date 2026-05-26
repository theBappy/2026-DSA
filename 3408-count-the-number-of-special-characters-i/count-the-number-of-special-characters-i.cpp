class Solution {
public:
    int numberOfSpecialChars(string word) {
        int lower = 0, upper = 0;
        for (char ch : word) {
            if (islower(ch)) {
                lower |= (1 << (ch - 'a'));
            } else {
                upper |= (1 << (ch - 'A'));
            }
        }
        return __builtin_popcount(lower & upper);
    }
};