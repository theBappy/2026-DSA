class Solution {
public:
    int rotatedDigits(int n) {
        int cnt = 0;
        for (int i = 1; i <= n; i++) {
            int check = i;
            bool valid = true;
            bool changed = false;
            while (check > 0 && valid) {
                int digit = check % 10;
                if (digit == 3 || digit == 4 || digit == 7)
                    valid = false;
                else if (digit == 2 || digit == 5 || digit == 6 || digit == 9)
                    changed = true;
                check /= 10;
            }
            if (valid && changed)
                cnt++;
        }
        return cnt;
    }
};