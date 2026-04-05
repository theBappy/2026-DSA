class Solution {
public:
    int furthestDistanceFromOrigin(string moves) {
        int leftCount = 0;
        int rightCount = 0;
        int spacesCount = 0;
        for (char &ch : moves) {
            if (ch == 'L')
                leftCount++;
            if (ch == 'R')
                rightCount++;
            if (ch == '_')
                spacesCount++;
        }
        if(leftCount > rightCount){
            return leftCount + spacesCount - rightCount;
        }else{
            return rightCount + spacesCount - leftCount;
        }
    }
};