class Solution {
public:
    int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        unordered_set<string> st; //S.C = O(m)
        for (vector<int>& obs : obstacles) { //O(m) [m=obstacles size]
            string key = to_string(obs[0]) + '_' + to_string(obs[1]);
            st.insert(key);
        }
        int x = 0;
        int y = 0;
        int maxD = 0;

        // pointing to north
        pair<int, int> dir = {0, 1}; // north
        //O(m+n*maxVal commands)
        for (int i = 0; i < commands.size(); i++) { //O(n) [n=commands length]
            if (commands[i] == -2) {
                // left to 90 degree
                dir = {-dir.second, dir.first};
            } else if (commands[i] == -1) {
                // right to 90 degree
                dir = {dir.second, -dir.first};
            } else {
                // move to the direction step by step
                for (int step = 0; step < commands[i]; step++) { //O(maxVal of commands size)
                    int newX = x + dir.first;
                    int newY = y + dir.second;
                    string newKey = to_string(newX) + "_" + to_string(newY);
                    if (st.find(newKey) != st.end()) {
                        break;
                    }
                    x = newX;
                    y = newY;
                }
            }
            maxD = max(maxD, x * x + y * y);
        }
        return maxD;
    }
};