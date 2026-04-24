class Solution {
public:
    int furthestDistanceFromOrigin(string moves) {
        int leftMove = 0;
        int rightMove = 0;
        int spacedMove = 0;
        for (char& move : moves) {
            if (move == 'L')
                leftMove++;
            if (move == 'R')
                rightMove++;
            if (move == '_')
                spacedMove++;
        }
        return abs(leftMove - rightMove) + spacedMove;
    }
};