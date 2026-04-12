class Solution {
public:

    int dp[301][7][7][7][7];

    pair<int, int> getCoordinate(char ch) {
        int pos = ch - 'A';
        return {pos / 6, pos % 6};
    }

    int getDistance(int x1, int y1, int x2, int y2) {
        return abs(x1 - x2) + abs(y1 - y2);
    }

    int solve(string &word, int i, int x1, int y1, int x2, int y2) {
        if (i == word.size()) 
            return 0;

        if (dp[i][x1 + 1][y1 + 1][x2 + 1][y2 + 1] != -1)
            return dp[i][x1 + 1][y1 + 1][x2 + 1][y2 + 1];

        auto [x, y] = getCoordinate(word[i]);

        // Case 1: first finger not used
        if (x1 == -1 && y1 == -1 && x2 == -1 && y2 == -1) {
            //using finger 1
            return dp[i][x1 + 1][y1 + 1][x2 + 1][y2 + 1] = solve(word, i + 1, x, y, x2, y2); //Choose any finger (1 or 2), both symmetric
        }

        // Case 2: second finger not used
        if (x2 == -1 && y2 == -1) {
            int moveF2 = solve(word, i + 1, x1, y1, x, y);

            int moveF1 = solve(word, i + 1, x, y, x2, y2) 
                             + getDistance(x1, y1, x, y);

            return dp[i][x1 + 1][y1 + 1][x2 + 1][y2 + 1] = min(moveF1, moveF2);
        }

        // Case 3: both fingers used
        int moveF1 = solve(word, i + 1, x, y, x2, y2) 
                     + getDistance(x1, y1, x, y);

        int moveF2 = solve(word, i + 1, x1, y1, x, y) 
                     + getDistance(x2, y2, x, y);

        return dp[i][x1 + 1][y1 + 1][x2 + 1][y2 + 1] = min(moveF1, moveF2);
    }

    int minimumDistance(string word) {
        //finger1 = (x1, y1)
        //finger2 = (x2, y2)
        memset(dp, -1, sizeof(dp));
        return solve(word, 0, -1, -1, -1, -1);
    }
};