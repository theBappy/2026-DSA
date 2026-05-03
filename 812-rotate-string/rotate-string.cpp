class Solution {
public:
    bool rotateString(string s, string goal) {
        int m = s.length();
        int n = goal.length();
        if (m != n)
            return false;
        for (int rotationCount = 1; rotationCount <= m; rotationCount++) {
            // rotate(start of range, which position will become start position of range, end of range)
            rotate(s.begin(), s.begin() + 1, s.end());
            if (s == goal)
                return true;
        }
        return false;
    }
};