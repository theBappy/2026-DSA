class Solution {
public:
    int maxJumps(vector<int>& arr, int d) {
        int n = arr.size();
        // t[i] = maximum jumps starting from index i
        vector<int> t(n, 1);

        vector<pair<int, int>> vec;

        // pair each value with its index and sort by value ascending to process smaller element first
        for (int i = 0; i < n; i++) {
            vec.push_back({arr[i], i});
        }
        sort(begin(vec), end(vec));

        for (auto& it : vec) {
            int val = it.first;
            int i   = it.second;

            // move left: check up to d steps back
            for (int j = i - 1; j >= max(0, i - d); j--) {
                // breaking condition: can't jump over or onto a taller/equal building
                if (arr[j] >= arr[i])
                    break;
                t[i] = max(t[i], 1 + t[j]);
            }

            // move right: check up to d steps forward
            for (int j = i + 1; j <= min(n - 1, i + d); j++) {
                // breaking condition: can't jump over or onto a taller/equal building
                if (arr[j] >= arr[i])
                    break;
                t[i] = max(t[i], 1 + t[j]);
            }
        }
        // answer is the maximum value found in our DP array
        return *max_element(begin(t), end(t));
    }
};