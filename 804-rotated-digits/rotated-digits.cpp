class Solution {
public:
    int rotatedDigits(int n) {
        // 0: Same, 1: Good, 2: Invalid
        vector<int> memo(n + 1, 0);
        int count = 0;

        for (int i = 1; i <= n; ++i) {
            int remaining_part = memo[i / 10];
            int digit = i % 10;

            if (remaining_part == 2 || digit == 3 || digit == 4 || digit == 7) {
                memo[i] = 2;
            } else if (remaining_part == 1 || digit == 2 || digit == 5 || digit == 6 || digit == 9) {
                memo[i] = 1;
                count++;
            } else {
                memo[i] = 0;
            }
        }
        return count;
    }
};