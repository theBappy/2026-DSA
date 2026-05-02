class Solution {
public:
    int rotatedDigits(int n) {
        vector<int> memo_arr(n + 1, -1);
        memo_arr[0] = 0;
        int count = 0;

        for (int i = 1; i <= n; i++) {
            int remaining_part = memo_arr[i / 10];
            if (remaining_part == 2) {
                memo_arr[i] = 2;
                continue;
            }

            int digit = i % 10;
            int digit_check;
            if (digit == 0 || digit == 1 || digit == 8)
                digit_check = 0; // same number
            else if (digit == 2 || digit == 5 || digit == 6 || digit == 9)
                digit_check = 1; // good number
            else {
                memo_arr[i] = 2; // invalid case
                continue;
            }
            if (remaining_part == 0 && digit_check == 0)
                memo_arr[i] = 0;
            else
                memo_arr[i] = 1;

            if (memo_arr[i] == 1)
                count++;
        }
        return count;
    }
};