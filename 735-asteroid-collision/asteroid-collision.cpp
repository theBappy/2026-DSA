class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        stack<int> st;

        for (int & asteroid : asteroids) {
            while (!st.empty() && asteroid < 0 && st.top() > 0) {
                int sum = asteroid + st.top();
                if (sum < 0) {
                    st.pop();
                } else if (sum > 0) {
                    asteroid = 0;
                    break;
                } else {
                    st.pop();
                    asteroid = 0;
                }
            }
            if (asteroid != 0) {
                st.push(asteroid);
            }
        }
        int s = st.size();
        vector<int> result(s);
        int i = s - 1;
        while (!st.empty()) {
            result[i] = st.top();
            st.pop();
            i--;
        }
        return result;
    }
};