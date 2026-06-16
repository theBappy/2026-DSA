class Solution {
public:
    string processStr(string s) {
        vector<char> result;
        for (char& ch : s) {
            if (islower(ch)) {
                result.push_back(ch);
            } else if (ch == '*') {
                if (!result.empty()) {
                    result.pop_back();
                }
            } else if (ch == '#') {
                vector<char> copy = result;
                result.insert(result.end(), copy.begin(), copy.end());
            } else if (ch == '%') {
                reverse(result.begin(), result.end());
            }
        }
        return string(result.begin(), result.end());
    }
};