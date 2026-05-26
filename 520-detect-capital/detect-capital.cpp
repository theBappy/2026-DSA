class Solution {
public:
    bool detectCapitalUse(string word) {
        // Condition 1: All capitals
        bool allUpper = all_of(word.begin(), word.end(), ::isupper);
        if (allUpper)
            return true;
        // Condition 2 & 3: All lowercase OR Title Case (First upper, rest
        // lower) In both cases, everything from the 2nd character onward MUST be lowercase.
        bool restLower = all_of(word.begin() + 1, word.end(), ::islower);
        return restLower;
    }
};